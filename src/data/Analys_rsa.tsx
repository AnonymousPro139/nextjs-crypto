"use client";
import React, { useState } from "react";

import logo from "../../public/img/rsa.svg";
import Intro from "@/components/Intro";
import Image from "next/image";
import Dropdown from "@/components/Dropdown";
import CategoryTitle from "@/components/CategoryTitle";

function Analys_rsa() {
  const [analys, setAnalys] = useState(false);
  const [error, setError] = useState("");
  const [P, setP] = useState<number>(1597);
  const [Q, setQ] = useState<number>(28657);
  const [E, setE] = useState<number>(17);
  const [privateD, setPrivateD] = useState<number>();
  const [data, setData] = useState<number>();
  const [encryptedData, setEncryptedData] = useState<number>();
  const [decryptedData, setDecryptedData] = useState<number>();
  const [publicKey, setPublicKey] = useState<number>();
  const [N, setN] = useState<number>(3147);
  const [resultFactor, setResFactor] = useState("");
  const [analizP, setAnalizP] = useState("");
  const [analizQ, setAnalizQ] = useState("");
  const [analizF, setAnalizF] = useState<number>();
  const [analizE, setAnalizE] = useState<number | undefined>();
  const [analizD, setAnalizD] = useState<number>();
  const [analizData, setAnalizData] = useState<number>();
  const [analyzDecryptData, setAnalizDecryptData] = useState<number>();
  const [isLoading, setLoading] = useState(false);

  const setHandler = (e: any) => {
    setError("");
    if (e === "test") setAnalys(false);
    else setAnalys(true);
  };

  const FactorN = (p: number, q: number) => {
    return (Number(p) - 1) * (Number(q) - 1);
  };
  // find the least factor in n by trial division
  function leastFactor(n: number) {
    if (isNaN(n) || !isFinite(n)) return NaN;
    if (n == 0) return 0;
    if (n % 1 || n * n < 2) return 1;
    if (n % 2 == 0) return 2;
    if (n % 3 == 0) return 3;
    if (n % 5 == 0) return 5;
    var m = Math.sqrt(n);
    for (var i = 7; i <= m; i += 30) {
      if (n % i == 0) return i;
      if (n % (i + 4) == 0) return i + 4;
      if (n % (i + 6) == 0) return i + 6;
      if (n % (i + 10) == 0) return i + 10;
      if (n % (i + 12) == 0) return i + 12;
      if (n % (i + 16) == 0) return i + 16;
      if (n % (i + 22) == 0) return i + 22;
      if (n % (i + 24) == 0) return i + 24;
    }
    return n;
  }

  const isPrime = (n: number) => {
    if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
    if (n == leastFactor(n)) return true;
    return false;
  };

  const gcd_two_numbers = (x: number, y: number) => {
    if (typeof x !== "number" || typeof y !== "number") return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  };

  const createPubKey = () => {
    if (isNaN(P)) {
      setError("P түлхүүр оруулна уу");
      return;
    }

    if (isNaN(Q)) {
      setError("Q түлхүүр оруулна уу");
      return;
    }

    if (isNaN(E)) {
      setError("E түлхүүр оруулна уу");
      return;
    }

    if (isPrime(P) == false) {
      setError("P тоо анхны тоо биш байна.");
      return;
    }

    if (isPrime(Q) == false) {
      setError("Q тоо анхны тоо биш байна.");
      return;
    }

    if (
      Number(E) >= FactorN(Number(P), Number(Q)) ||
      Number(E) < 1 ||
      Number(E) == 1
    ) {
      setError("E тоо 3-р шинжийг хангахгүй байна");
      return;
    }

    const pubK = Number(P) * Number(Q);

    var F = FactorN(Number(P), Number(Q));

    if (gcd_two_numbers(F, Number(E)) !== 1) {
      setError("E тоо 2-р шинжийг хангахгүй байна...");
      return;
    }

    setPublicKey(pubK);
  };

  const createPrivateD = () => {
    const Fac = FactorN(Number(P), Number(Q));

    for (let i = 2; i < Fac; i++) {
      if ((Number(E) * Number(i)) % Fac === 1) {
        setPrivateD(i);
        break;
      }
    }
  };

  const powerXY = (x: number, y: number, n: number) => {
    let tmp = x;
    for (let i = 1; i < y; i++) {
      tmp = (tmp * x) % n;
    }

    return tmp;
  };

  const findD = () => {
    if (analizE != undefined && isNaN(analizE)) {
      setError("E утга оруулна уу");
      return;
    }

    setLoading(true);
    for (let x = 2; x < Number(analizF); x++) {
      if ((x * Number(analizE)) % Number(analizF) === 1) {
        setAnalizD(x);
        setLoading(false);
        break;
      }
    }

    setLoading(false);
  };

  // http://www.javascripter.net/math/primes/factorization.htm
  // Доорх factor(n) болон leastFactor(n) функцийг дээрх сайтаас авав. 2^53 дотор бол задлана гэж бичсэн байв.
  const factor = (n: any): any => {
    if (isNaN(n) || !isFinite(n) || n % 1 != 0 || n == 0) return "" + n;
    if (n < 0) return "-" + factor(-n);
    var minFactor = leastFactor(n);
    if (n == minFactor) return "" + n;
    return minFactor + "*" + factor(n / minFactor);
  };

  const factorization = () => {
    if (isNaN(N)) {
      setError("Утга оруулна уу");
      return;
    }

    setResFactor(factor(N));
  };

  const analizDecrypt = () => {
    if (analizData != undefined && isNaN(analizData)) {
      setError("Тайлах утгаа оруулна уу");
      return;
    }

    setAnalizDecryptData(
      powerXY(Number(analizData), Number(analizD), Number(N))
    );
  };

  const encrypt = () => {
    if (publicKey == null) {
      setError("PublicKey олдсонгүй");
      return;
    }
    if (isNaN(E)) {
      setError("E утга олдсонгүй");
      return;
    }

    if (data != undefined && isNaN(data)) {
      setError("Нууцлах тоон утгаа оруулна уу");
      return;
    }
    setEncryptedData(powerXY(Number(data), Number(E), Number(publicKey)));
  };

  const decrypt = () => {
    if (publicKey == null) {
      setError("PublicKey олдсонгүй");
      return;
    }
    if (privateD == null) {
      setError("D утга олдсонгүй");
      return;
    }

    if (data != undefined && isNaN(data)) {
      setError("Нууцлах тоон утгаа оруулна уу");
      return;
    }

    setDecryptedData(
      powerXY(Number(data), Number(privateD), Number(publicKey))
    );
  };

  return (
    <div className="container">
      <Intro
        title="Криптоанализ!"
        description="Power of Prime Numbers"
      />
      <div className="columns" style={{ margin: 10 }}>
        <div className="column is-one-third">
          <Image
            src={logo}
            // width={130}
            height={130}
            alt="photo"
            priority={true}
            style={{ width: "auto" }}
          />
        </div>

        <div
          className="column"
          style={{
            alignSelf: "center",
            color: "black",
            fontSize: 21,
            fontWeight: "bolder",
          }}
        >
          RSA (Rivest–Shamir–Adleman)
        </div>

        <div className="column" style={{ alignSelf: "center" }}>
          <Dropdown
            url={"/analysis/rsa"}
            info={"Цэс"}
            data={[
              {
                text: "Туршилт хийх",
                endpoint: "test",
              },
              {
                text: "Довтолгоо хийх",
                endpoint: "attack",
              },
            ]}
            onClick={(endpoint: any) => setHandler(endpoint)}
          />
        </div>
      </div>

      <div className="column">
        <div className="column">
          Нийтийн болон хувийн түлхүүр ашигладаг нууцлалын алгоритмуудаас
          хамгийн их тархсан алгоритм бол <strong> RSA алгоритм</strong> юм.
          Тоон гарын үсэг, сертификатад ихэвчлэн ашигладаг.
          <br></br>Ерөнхийдөө нууцлал хамгаалалтын алгоритмуудыг 2 төрөлд
          хуваадаг. Эдгээрийг <strong> дундын түлхүүрийн алгоритм </strong>болон
          <strong> нийтийн түлхүүрийн алгоритм </strong>гэнэ.
        </div>

        <div className="column">
          Хэрэглэгч нь N болон E тоонуудыг үүсгэж харилцагч талдаа илгээх бөгөөд
          тус алгоритмаар нууцлагдсан өгөгдлийг өөрийн{" "}
          <strong>нууц түлхүүр</strong> болох <strong>D</strong> -ийн тусламжтай
          тайлж уншдаг.
        </div>

        <div className="column">
          Энд
          <ul>
            <li>
              1.
              <strong> N = P * Q </strong> ба P, Q - анхны тоонууд
            </li>
            <li>
              2. <strong>E</strong> болон F(N) тоонууд нь харилцан анхны тоонууд
              байна.
              <strong> Харин F(N) = (P-1)*(Q-1)</strong>. Мөн E тоо нь 1 болон
              F(N) тооны хооронд оршин байх ёстой
            </li>
          </ul>
          <div>
            Хэрэглэгч дараах <strong>(N,E) </strong> утгуудыг харилцагч талдаа
            илгээнэ.
          </div>
        </div>

        <div className="column">
          Харин харилцагч тал өөрийн нууцлах M мэдээллийг
          <ul>
            <strong>C = M^E (mod N ) </strong> илэрхийллээр бодож илгээнэ.
          </ul>
        </div>

        <div className="column">
          Хүлээн авагч тал нь өөрийн нууц түлхүүр болох D -ийн тусламжтайгаар
          <ul>
            <strong>M = C^D (mod F(N) ) </strong>илэрхийллээр бодож тайлна.
          </ul>
        </div>

        <div className="column">
          Энд хүлээн авагч тал өөрийн D түлхүүрийг дараах байдлаар сонгоно
          <ul>
            <li>
              <strong>D*E = 1 (mod F(N))</strong> өөрөөр хэлбэл D, E утгууд F(N)
              модулаар харилцан анхны тоонууд байна.
            </li>
          </ul>
        </div>
      </div>

      {analys ? (
        <div>
          {error && <div className="notification is-danger">{error}</div>}
          <div
            style={{
              color: "red",
              fontSize: 28,
              alignItems: "center",
              marginBottom: 15,
              marginTop: 5,
            }}
          >
            Довтолгоо
          </div>
          <div>
            <strong>Факторизаци</strong> буюу нийтийн түлхүүрийг p * q
            үржигдэхүүнд задлах оролдлого хийцгээе
          </div>
          <div style={{ marginBottom: 30 }}>
            <span
              className="tag is-success"
              style={{ marginBottom: 10, marginTop: 15, color: "black" }}
            >
              N - нийтийн түлхүүр
            </span>
            <textarea
              id="txt1"
              className="textarea"
              placeholder="N нийтийн түлхүүр оруулах"
              rows={1}
              value={N}
              onChange={(e: any) => {
                setN(e.target.value);
                setError("");
                setResFactor("");
                setAnalizP("");
                setAnalizQ("");
              }}
            ></textarea>
            <button
              className="button is-success"
              style={{
                margin: 15,
                color: "black",
                fontWeight: "initial",
              }}
              onClick={factorization}
            >
              Үржигдэхүүнд задлах!
            </button>
            {resultFactor.length > 0 && (
              <div>
                <span
                  className="tag is-success"
                  style={{ marginBottom: 10, marginTop: 15, color: "black" }}
                >
                  Үр дүн
                </span>
                <textarea
                  id="txt2"
                  className="textarea"
                  rows={1}
                  value={"p * q = " + resultFactor}
                  onChange={() => {}}
                  readOnly
                ></textarea>
                <div style={{ marginTop: 15 }}>
                  <div style={{ color: "red" }}>
                    Одоо харин F(n) тоог олцгооё
                  </div>
                  <textarea
                    id="txt3"
                    className="textarea"
                    placeholder="p тоог оруулах"
                    rows={1}
                    value={analizP}
                    onChange={(e: any) => {
                      setAnalizP(e.target.value);
                      setError("");
                      setAnalizF(undefined);
                    }}
                  ></textarea>
                  <br></br>
                  <textarea
                    id="txt4"
                    className="textarea"
                    placeholder="q тоог оруулах"
                    rows={1}
                    value={analizQ}
                    onChange={(e) => {
                      setAnalizQ(e.target.value);
                      setError("");
                      setAnalizF(undefined);
                    }}
                  ></textarea>

                  {analizF != undefined && isNaN(analizF) == false ? (
                    <div style={{ marginTop: 10 }}>
                      <textarea
                        id="txt5"
                        className="textarea"
                        rows={1}
                        value={"F(n) = " + analizF}
                        onChange={() => {}}
                        readOnly
                      ></textarea>

                      <div style={{ marginTop: 15, color: "red" }}>
                        <span>
                          E тоог оруулаарай, N болон E тоонууд нь нийтийн
                          түлхүүрүүд учраас бид ямар утгатай байгааг мэднэ
                        </span>
                        <textarea
                          id="txt6"
                          className="textarea"
                          placeholder="E тоог оруулах"
                          rows={1}
                          value={analizE}
                          onChange={(e: any) => {
                            setAnalizE(e.target.value);
                            setAnalizD(undefined);
                            setError("");
                          }}
                        ></textarea>
                        {analizD != undefined && isNaN(analizD) == false ? (
                          <div>
                            <textarea
                              id="txt7"
                              className="textarea"
                              placeholder="E тоог оруулах"
                              rows={1}
                              value={
                                "Нууц утгыг бид олж чадлаа, D = " + analizD
                              }
                              onChange={() => {}}
                              readOnly
                            ></textarea>
                            <div style={{ marginTop: 15 }}>
                              <span>
                                Одоо нууцлагдсан мэдээллээ оруулаарай,
                                Тайлцгаая! Жич: Зөвхөн тоон утга оруулна уу
                              </span>
                              <div>
                                <textarea
                                  id="txt8"
                                  className="textarea"
                                  placeholder="Тайлах мэдээллээ оруулах"
                                  rows={1}
                                  value={analizData}
                                  onChange={(e: any) => {
                                    setAnalizData(e.target.value);
                                    setAnalizDecryptData(undefined);
                                  }}
                                ></textarea>

                                {analyzDecryptData != undefined &&
                                isNaN(analyzDecryptData) == false ? (
                                  <div>
                                    <span
                                      className="tag is-success"
                                      style={{
                                        marginBottom: 10,
                                        marginTop: 15,
                                        color: "black",
                                      }}
                                    >
                                      Баяр хүргье, Бид нууцлагдсан мэдээг
                                      амжилттай тайллаа
                                    </span>
                                    <textarea
                                      id="txt9"
                                      className="textarea"
                                      placeholder="Тайлах мэдээллээ оруулах"
                                      rows={1}
                                      value={analyzDecryptData}
                                      onChange={(e) => {
                                        setAnalizDecryptData(undefined);
                                        setError("");
                                      }}
                                    ></textarea>
                                  </div>
                                ) : (
                                  <button
                                    className="button is-success"
                                    style={{
                                      margin: 15,
                                      color: "black",
                                      fontWeight: "initial",
                                    }}
                                    onClick={analizDecrypt}
                                  >
                                    Тайлах
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <button
                            className="button is-success"
                            style={{
                              margin: 15,
                              color: "black",
                              fontWeight: "initial",
                            }}
                            onClick={findD}
                          >
                            {isLoading === true
                              ? "Түр хүлээнэ үү"
                              : "Нууц D тоог олцгооё!"}
                          </button>
                        )}
                      </div>
                    </div>
                  ) : (
                    <button
                      className="button is-success"
                      style={{
                        margin: 15,
                        color: "black",
                        fontWeight: "initial",
                      }}
                      onClick={() => {
                        if (analizP.length === 0) {
                          setError("P тоог оруулна уу");
                          return;
                        }
                        if (analizQ.length === 0) {
                          setError("Q тоог оруулна уу");
                          return;
                        }

                        if (isPrime(parseInt(analizP)) === false) {
                          setError("P тоо анхны тоо байх ёстой");
                          return;
                        }

                        if (isPrime(parseInt(analizQ)) === false) {
                          setError("Q тоо анхны тоо байх ёстой");
                          return;
                        }

                        let ret = FactorN(parseInt(analizP), parseInt(analizQ));
                        setAnalizF(ret);
                      }}
                    >
                      F(n) утгыг тооцоолох
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <CategoryTitle title={"Туршилт хийх"} />

          {error && <div className="notification is-danger">{error}</div>}

          <div style={{ marginBottom: 30 }}>
            <span
              className="tag is-primary"
              style={{ marginBottom: 10, color: "black" }}
            >
              P - анхны тоо
            </span>
            <textarea
              id="txt10"
              className="textarea"
              placeholder="P түлхүүр оруулах"
              rows={1}
              value={P}
              onChange={(e: any) => {
                setP(e.target.value);
                setError("");
                setPublicKey(undefined);
                setData(undefined);
                setPrivateD(undefined);
              }}
            ></textarea>
          </div>
          <div style={{ marginBottom: 30 }}>
            <span
              className="tag is-primary"
              style={{ marginBottom: 10, color: "black" }}
            >
              Q - анхны тоо
            </span>
            <textarea
              id="txt11"
              className="textarea"
              placeholder="Q түлхүүр оруулах"
              rows={1}
              value={Q}
              onChange={(e: any) => {
                setQ(e.target.value);
                setError("");
                setPublicKey(undefined);
                setData(undefined);
                setPrivateD(undefined);
              }}
            ></textarea>
          </div>

          <div style={{ marginBottom: 30 }}>
            <div className="columns" style={{ color: "gray" }}>
              E буюу экспонент утга нь дараах шинжтэй байна.
              <div className="column">
                <ul>
                  <li>1. Бүхэл тоо байна</li>
                  <li>2. F(N) тоотой харилцан анхны тоо байна</li>
                  <li>
                    3. 1 болон F(N) тооны хооронд оршин байх ёстой. Энд F(N) -
                    factor of N.
                  </li>
                </ul>
              </div>
            </div>
            <span
              className="tag is-primary"
              style={{ marginBottom: 10, color: "black" }}
            >
              E - түлхүүр
            </span>
            <textarea
              id="txt12"
              className="textarea"
              placeholder="E түлхүүр оруулах"
              rows={1}
              value={E}
              onChange={(e: any) => {
                setE(e.target.value);
                setError("");
                setPublicKey(undefined);
              }}
            ></textarea>
          </div>

          {publicKey !== undefined ? (
            <div>
              <span
                className="tag is-warning"
                style={{ marginBottom: 10, color: "black" }}
              >
                Таны нийтийн түлхүүр (N, E) амжилттай үүслээ
              </span>
              <textarea
                id="txt13"
                className="textarea"
                rows={1}
                value={"N= " + publicKey}
                onChange={() => {}}
                readOnly
              ></textarea>
              <textarea
                id="txt14"
                className="textarea"
                rows={1}
                value={"E = " + E}
                onChange={() => {}}
                readOnly
              ></textarea>

              <div style={{ marginBottom: 30, marginTop: 35 }}>
                {privateD !== undefined ? (
                  <div>
                    <span
                      className="tag is-warning"
                      style={{ marginBottom: 10, color: "black" }}
                    >
                      Таны нууц түлхүүр D үүслээ
                    </span>
                    <textarea
                      id="txt15"
                      className="textarea"
                      rows={1}
                      value={"D = " + privateD}
                      onChange={() => {}}
                      readOnly
                    ></textarea>
                  </div>
                ) : (
                  <button
                    className="button is-primary"
                    style={{
                      margin: 15,
                      color: "black",
                      fontWeight: "initial",
                    }}
                    onClick={createPrivateD}
                  >
                    Өөрийн нууц түлхүүр үүсгэх!
                  </button>
                )}
              </div>
            </div>
          ) : (
            <button
              className="button is-primary"
              style={{ margin: 15, color: "black", fontWeight: "initial" }}
              onClick={createPubKey}
            >
              Нийтийн түлхүүр үүсгэх!
            </button>
          )}

          <div>
            <span
              className="tag is-warning"
              style={{ marginBottom: 10, marginTop: 30, color: "black" }}
            >
              Та нууцлах мэдээллээ тоон утгаруу хөрвүүлэн оруулна уу. Ямар ч
              мэдээллийг тоон утгаруу хөрвүүлж болно
            </span>
            <textarea
              id="txt16"
              className="textarea"
              placeholder="Нууцлах тоон утгаа оруулна уу"
              rows={1}
              value={data}
              onChange={(e: any) => {
                setData(e.target.value);
                setError("");
                setEncryptedData(undefined);
                setDecryptedData(undefined);
              }}
            ></textarea>

            <button
              className="button is-warning"
              style={{ margin: 15, color: "black", fontWeight: "initial" }}
              onClick={encrypt}
            >
              Нууцлах
            </button>

            <button
              className="button is-danger"
              style={{ margin: 15, color: "black", fontWeight: "initial" }}
              onClick={decrypt}
            >
              Тайлах
            </button>

            {encryptedData != undefined && isNaN(encryptedData) == false && (
              <div>
                <span className="tag is-warning" style={{ marginBottom: 10 }}>
                  Үр дүн
                </span>
                <textarea
                  id="txt17"
                  className="textarea"
                  rows={1}
                  value={encryptedData}
                  onChange={(e) => {
                    setEncryptedData(undefined);
                    setError("");
                  }}
                ></textarea>
              </div>
            )}

            {decryptedData != undefined && isNaN(decryptedData) == false && (
              <div>
                <span className="tag is-danger" style={{ marginBottom: 10 }}>
                  Үр дүн
                </span>
                <textarea
                  id="txt18"
                  className="textarea"
                  rows={1}
                  value={decryptedData}
                  onChange={(e) => {
                    setDecryptedData(undefined);
                    setError("");
                  }}
                ></textarea>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Analys_rsa;
