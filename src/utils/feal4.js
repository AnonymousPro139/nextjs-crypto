
export function strToByteArray(str) {
    return new TextEncoder().encode(str);
}

export function byteArrayToStr(bytes){
    return new TextDecoder().decode(bytes);
}

function leftRotate (n, d) {
    return (n << d & 0xFF) | (n >> (8-d) & 0xFF);
}

function G0(x, y) {
    return leftRotate(x+y & 0xFF, 2);
}

function G1(x, y) {
    return leftRotate(x+y+1 & 0xFF, 2);
}

function intToBytes(num) {
    return new Uint8Array([
        (num & 0xff000000) >> 24,
        (num & 0x00ff0000) >> 16,
        (num & 0x0000ff00) >> 8,
        (num & 0x000000ff)
    ]);
}

function roundFunction(num) {
    var x = intToBytes(num);
    var y = new Uint8Array(4);

    y[1] = G1(x[0] ^ x[1], x[2] ^ x[3]);
    y[0] = G0(x[0], y[1]);
    y[2] = G0(x[2] ^ x[3], y[1]);
    y[3] = G1(x[3], y[2]);
    
    return bytesToInt(y, 0);
}

function bytesToInt(bytes, begin) {
    return (bytes[begin] << 24 | bytes[begin + 1] << 16 | bytes[begin +2] << 8 | bytes[begin+3]);
}

function combineHalves(a, b) {
    return new Uint8Array([
        (a & 0xff000000) >> 24, 
        (a & 0x00ff0000) >> 16,
        (a & 0x0000ff00) >> 8,
        (a & 0x000000ff), 
        (b & 0xff000000) >> 24,
        (b & 0x00ff0000) >> 16,
        (b & 0x0000ff00) >> 8,
        (b & 0x000000ff)
    ]);
}

function encryptOneBlock(bytes, subkey) {
    var left = bytesToInt(bytes, 0);
    var right = bytesToInt(bytes, 4);

    var left = left ^ subkey[4];
    var right = right ^ subkey[5];

    var round1right = left ^ right;
    var round1left = left ^ roundFunction(round1right ^ subkey[0]);

    var round2right = round1left;
    var round2left = round1right ^ roundFunction(round1left ^ subkey[1]);

    var round3right = round2left;
    var round3left = round2right ^ roundFunction(round2left ^ subkey[2]);

    var round4right = round3left;
    var round4left = round3right ^ roundFunction(round3left ^ subkey[3]);
    var round4right = round4right ^ round4left;
    return combineHalves(round4left, round4right);
}

function decryptOneBlock(bytes, subkey) {
    var left = bytesToInt(bytes, 0);
    var right = bytesToInt(bytes, 4);

    var round4right = right ^ left;
    var round4left = left ^ roundFunction(round4right ^ subkey[3]);

    var round3right = round4left;
    var round3left = round4right ^ roundFunction(round3right ^ subkey[2]);

    var round2right = round3left;
    var round2left = round3right ^ roundFunction(round2right ^ subkey[1]);

    var round1right = round2left;
    var round1left = round2right ^ roundFunction(round1right ^ subkey[0]);
    var round1right = round1right ^ round1left;

    var left = round1left ^ subkey[4];
    var right = round1right ^ subkey[5];
    return combineHalves(left, right);
}

export function generateSubkeys(){
    var subkeys = new Uint32Array(6);
    subkeys[0] = Math.random()*2**32>>>0;
    subkeys[1] = Math.random()*2**32>>>0;
    subkeys[2] = Math.random()*2**32>>>0;
    subkeys[3] = Math.random()*2**32>>>0;
    subkeys[4] = Math.random()*2**32>>>0;
    subkeys[5] = Math.random()*2**32>>>0;
    return subkeys;
}

export function encrypt(bytes, subkey) {
 
    var size = bytes.length;
    var pad = (size % 8 == 0) ? 0 : 8 - size % 8;
    
    var loop = (size + pad)/8;
    var temp = new Uint8Array(8);
    var ct = new Uint8Array(size + pad);
    for (var i = 0; i < loop - 1; i++) {
        for(var j = 0; j < 8; j++){
            temp[j] = bytes[8 * i + j];
        }
        temp = encryptOneBlock(temp, subkey);
        for(var k = 0; k < 8; k++) ct[8 * i + k] = temp[k];
    }
    i = 0;
    for(k = (loop - 1) * 8 ; k < size; k++){
        temp[i] = bytes[k];
        i++;
    }
    for(k = size; k < size + pad -1; k++){
        temp[i] = 0;
        i++;
    }
    temp[i] = (pad == 0) ? 0 : pad;
    temp = encryptOneBlock(temp, subkey);
    for(var k = 0; k < 8; k++) ct[8 * (loop - 1) + k] = temp[k];

    return ct;
}

export function decrypt(bytes, subkey) {
    var size = bytes.length;
    var loop = size/8;
    var temp = new Uint8Array(8);
    var text = new Uint8Array(size);
    for(var i = 0; i < loop; i++) {
        for(var j = 0; j < 8; j++){
            temp[j] = bytes[8 * i + j];
        }
        temp = decryptOneBlock(temp, subkey);
        for(var k = 0; k < 8; k++) text[8 * i + k] = temp[k];
    }
    // console.log('before size: ', size);
    size = size - text[text.length - 1];
    // console.log('textiin suuliin element: ', text[text.length - 1]);
    // console.log('after size: ', size);
    var pt = new Uint8Array(size);
    for(var i = 0; i < size; i++) pt[i] = text[i];

    return pt;
}
// const subkey = generateSubkeys()
// var bytes = strToByteArray(input)

// let input = prompt('Enter a input: ');
// let input = "test";

// // let input = process.argv[2];
// const byteArray = strToByteArray(input);
// // console.log(byteArray);
// console.log('Plaintext length: ',  byteArray.length);

// const subkey = generateSubkeys();
// console.log('Subkeys are: ');
// for (let i = 0; i < subkey.length; i++){
//     console.log('subkey[' + i + ']: 0x' + subkey[i].toString(16));
// } 
// console.log('----------------------');


// ct = encrypt(byteArray, subkey);
// console.log('ciphertext length: ' + ct.length);
// console.log('Ciphertext: ', byteArrayToStr(ct));
// console.log('----------------------');

// pt = decrypt(ct, subkey);

// console.log('plaintext length: ' + pt.length);
// console.log('Plaintext: ', byteArrayToStr(pt));
// console.log('----------------------');




