const Test = `
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="generator" content="pandoc" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, user-scalable=yes"
    />
    <title>Эллиптик муруй</title>
   
  </head>
  <body>

    <p>
      Цаашид бидний авч үзэх хүрээ ихэвчлэн анхны талбарт хийгдэх болно.
      Төгсгөлөг талбарын арифметик үйлдлийн үр ашигтай гүйцэтгэл нь эллиптик
      муруйн системд чухал урьдчилсан нөхцөл юм. Учир нь тухайн талбар дахь
      муруйн үйлдлүүд түүнийг хэрэглэж гүйцэтгэгдэнэ.
    </p>
    <h3 id="эллиптик-муруй">Эллиптик муруй</h3>
    <p>
      <span class="math inline"
        ><em>a</em><sub>1</sub>, <em>a</em><sub>2</sub>, <em>a</em
        ><sub>3</sub>, <em>a</em><sub>4</sub>, <em>a</em><sub>6</sub> ∈ 𝔽</span
      >
      талбарын элементүүд хувьд
      <span class="math display"
        ><em>E</em>: <em>y</em><sup>2</sup> + <em>a</em><sub>1</sub><em>x</em
        ><em>y</em> + <em>a</em><sub>3</sub><em>y</em> = <em>x</em
        ><sup>3</sup> + <em>a</em><sub>2</sub><em>x</em><sup>2</sup> + <em>a</em
        ><sub>4</sub><em>x</em> + <em>a</em><sub>6</sub>   (1)</span
      >
      тэгшитгэлийн шийд байх
      <span class="math inline">(<em>x</em>,<em>y</em>)</span> цэгүүдийн
      олонлогийг <span class="math inline">𝔽</span> талбар дээрх
      <strong>эллиптик муруй</strong> гэнэ.
      <span class="math inline"><em>L</em></span> нь
      <span class="math inline">𝔽</span> талбарын өргөтгөл болог.
      <span class="math inline">(1)</span> тэгшитгэлийн шийдийн олонлогийг
      <span class="math inline"><em>L</em></span> дээр авч үзвэл
      <span class="math display"
        ><em>E</em>(<em>L</em>) = {<em>y</em><sup>2</sup> + <em>a</em
        ><sub>1</sub><em>x</em><em>y</em> + <em>a</em><sub>3</sub
        ><em>y</em> − <em>x</em><sup>3</sup> − <em>a</em><sub>2</sub><em>x</em
        ><sup>2</sup> − <em>a</em><sub>4</sub><em>x</em> − <em>a</em
        ><sub>6</sub> = 0} ∪ {∞}</span
      >
      олонлогийг <span class="math inline"><em>L</em></span> дээрх рационал
      цэгүүд буюу <span class="math inline"><em>L</em></span> дээрх эллиптик
      муруйн гэнэ. (Энд <span class="math inline">∞</span> - төгсгөлгүй алсын
      цэг). (1)-ийг
      <strong>Вейерштрассын өргөтгөсөн тэгшитгэл</strong> гэдэг.<br />
      Шинж чанарын хувьд дараахыг тэмдэглэе:<br />
      -
      <span class="math inline">$a_i, ~~ i = \overline{1,6}$</span>
      коэффициентүүдээс хамаарч (1) тэгшитгэл өөр өөр, харгалзах муруй нь янз
      бүрийн хэлбэртэй байна.<br />
      - <span class="math inline">𝔽</span> төгсгөлөг талбар үед уг цэгүүдийн
      олонлогийг зураглалаар дүрслэхэд амаргүй.<br />
      - <span class="math inline">𝔽 = ℚ, ℝ, ℂ</span> үед муруйн графикыг зурах
      боломжтой.<br />
      <br />
      Бүтэн квадрат ялгах аргаар (1)-ийг
      <span class="math display"
        >$$\left(y+\frac{a_1x}{2} + \frac{a_3}{2}\right)^2 = x^3 + \left(a_2 +
        \frac{a_4^2}{4}\right)x^2 +\left(a_4 + \frac{a_1a_3}{2}\right) x +
        \left(\frac{a_3^2}{4} + a_6\right)$$</span
      >
      гэж хувирган бичиж болно. Энэ тэгшитгэлийн баруун гар тал
      <span class="math display"
        >$$x^3 + \left(a_2 + \frac{a_4^2}{4}\right)x^2 +\left(a_4 +
        \frac{a_1a_3}{2}\right) x + \left(\frac{a_3^2}{4} + a_6\right) = 0
        \qquad (*)$$</span
      >
      тэгшитгэлийн 3 язгуур
      <span class="math inline"
        ><em>x</em><sub>1</sub>, <em>x</em><sub>2</sub>, <em>x</em
        ><sub>3</sub></span
      >
      бол
      <span class="math display"
        ><em>Δ</em> = [(<em>x</em><sub>1</sub>−<em>x</em><sub>2</sub>)(<em>x</em
        ><sub>1</sub>−<em>x</em><sub>3</sub>)(<em>x</em><sub>2</sub>−<em>x</em
        ><sub>3</sub>)]<sup>2</sup></span
      >
      тоог <strong>дискриминант</strong> гэдэг.<br />
      <strong>Санамж:</strong> (1) муруйн хувьд дараах эквивалент өгүүлбэрүүд
      биелнэ.
    </p>
    <ol>
      <li>
        <p>
          <span class="math inline">(*)</span> куб тэгшитгэл давхар язгуургүй
          байхыг шаардана.
        </p>
      </li>
      <li>
        <p>
          <span class="math inline"><em>Δ</em> ≠ 0</span>
        </p>
      </li>
      <li>
        <p>
          <span class="math inline">(1)</span> муруйн цэг бүрт зөвхөн ганц л
          шүргэгч татаж болох <em>гөлгөр</em> муруй байна.
        </p>
      </li>
    </ol>
    <p>
      Эллиптик муруй бүхэн изоморфийн нарийвчлалтайгаар нэг утгатай
      тодорхойлогддог болохыг харж болдог. Иймд
      <span class="math inline"><em>E</em></span> эллиптик муруйн
      <span class="math inline">(1)</span> тэгшитгэлийг өөртэй нь изоморф хялбар
      дүрстэй (өөрөөр хэлбэл; ихэнх коеффициент нь тэг байх) муруйд хувиргаж
      болно. Энэ хувиргалт нь талбарын характеристикаас хамаардаг. Бид энэ удаад
      <span class="math inline"><em>p</em> &gt; 3</span> характеристиктэй
      <span class="math inline"
        >𝔽<sub><em>p</em></sub></span
      >
      анхны талбар дээрх
      <span class="math inline"
        ><em>E</em>(𝔽<sub><em>p</em></sub
        >)</span
      >
      муруйн тухай асуудлыг авч үзнэ.
      <span class="math inline"
        >𝔽<sub><em>p</em></sub></span
      >
      талбарт <span class="math inline">(1)</span> тэгшитгэлийг
      <span class="math display"
        >$$(x,y) \longrightarrow \left( \frac{x - 3a^2_1 -12a_2}{36},~~
        \frac{y-3a_1x}{126} - \frac{a^3_1 + 4a_1a_2 -12a_3}{24}\right)$$</span
      >
      хувиргалтаар
      <span class="math inline"
        ><em>a</em>, <em>b</em> ∈ 𝔽<sub><em>p</em></sub></span
      >
      байх
      <span class="math display"
        ><em>y</em><sup>2</sup> = <em>x</em><sup>3</sup> + <em>a</em
        ><em>x</em> + <em>b</em>   (2)</span
      >
      тэгшитгэлд шилжинэ. Энэ муруйн дискриминант нь
      <span class="math inline"
        ><em>Δ</em> =  − 16(4<em>a</em><sup>3</sup>+12<em>b</em
        ><sup>2</sup>) ≠ 0</span
      >
      болно. Иймд бид цаашид
      <span class="math inline"
        >𝔽<sub><em>p</em></sub
        >, <em>p</em> &gt; 3</span
      >
      талбарт эллиптик муруйн тэгшитгэлийг (2) хэлбэртэйгээр тодорхойлж болох ба
      тус муруйн шийдүүдийн олонлогийг
      <span class="math display"
        ><em>E</em>(𝔽<sub><em>p</em></sub
        >) = {(<em>x</em>,<em>y</em>) | <em>y</em><sup>2</sup> = <em>x</em
        ><sup>3</sup> + <em>a</em
        ><em>x</em> + <em>b</em>,  <em>a</em>, <em>b</em> ∈ 𝔽<sub
          ><em>p</em></sub
        >}</span
      >
      гэж тэмдэглэе.
    </p>
    <h3 id="эллиптик-муруйн-арифметик-үйлдэл">
      Эллиптик муруйн арифметик үйлдэл
    </h3>
    <p>
      <span class="math inline"
        ><em>E</em>(𝔽<sub><em>p</em></sub
        >)</span
      >
      муруйн хоёр цэгийг нэмж муруй дээр орших гурав дахь цэгийг гаргах "<strong
        >хөвч - шүргэгчийн дүрэм</strong
      >" /chord-and-tangent rule/ оршин байна. Муруйн цэгүүдийн олонлог
      <span class="math inline"
        ><em>E</em>(𝔽<sub><em>p</em></sub
        >)</span
      >
      нь уг нэмэх үйлдэлээр <span class="math inline">∞</span> адилтгал
      элементтэй абелийн бүлэг үүсгэнэ. Энэ бүлэг нь эллиптик муруйн криптогафик
      системийг байгуулахад хэрэглэгддэг.<br />
      <br />
      <span class="math inline"
        ><em>E</em>(𝔽<sub><em>p</em></sub
        >): <em>y</em><sup>2</sup> = <em>x</em><sup>3</sup> + <em>a</em
        ><em>x</em> + <em>b</em>, (<em>p</em>&gt;3)</span
      >
      эллиптик муруйн аффин координатаарх бүлгийн үйлдэл нь дараах байдлаар
      тодорхойлогдоно:
    </p>
    <ol>
      <li>
        <p>
          (<strong>Адилтгал элемент</strong>): аливаа
          <span class="math inline"
            ><em>P</em> ∈ <em>E</em>(𝔽<sub><em>p</em></sub
            >)</span
          >
          хувьд
          <span class="math inline"
            ><em>P</em> + ∞ = ∞ + <em>P</em> = <em>P</em></span
          >
          байна.
        </p>
      </li>
      <li>
        <p>
          (<strong>Сөрөг элемент</strong>):
          <span class="math inline"
            ><em>P</em> = (<em>x</em>,<em>y</em>) ∈ <em>E</em>(𝔽<sub
              ><em>p</em></sub
            >)</span
          >
          бол
          <span class="math inline"
            >(<em>x</em>,<em>y</em>) + (<em>x</em>,−<em>y</em>) = ∞</span
          >
          байх
          <span class="math inline"
            >(<em>x</em>,−<em>y</em>) :=  − <em>P</em></span
          >
          цэгийг сөрөг элемент гэнэ. (<span class="math inline">∞ =  − ∞</span
          >).
        </p>
      </li>
      <li>
        <p>
          (<strong>Нэмэх</strong>):
          <span class="math inline"
            ><em>P</em> = (<em>x</em><sub>1</sub>,<em>y</em
            ><sub>1</sub>) ∈ <em>E</em>(𝔽<sub><em>p</em></sub
            >), <em>Q</em> = (<em>x</em><sub>2</sub>,<em>y</em
            ><sub>2</sub>) ∈ <em>E</em>(𝔽<sub><em>p</em></sub
            >)</span
          >
          цэгүүдийн хувьд
          <span class="math inline"><em>P</em> ≠  ± <em>Q</em></span> байг.
          Тэгвэл цэгүүдийн нийлбэр
          <span class="math inline"
            ><em>P</em> + <em>Q</em> = (<em>x</em><sub>3</sub>,<em>y</em
            ><sub>3</sub>)</span
          >
          нь дараахаар илэрхийлэгдэнэ:
          <span class="math display"
            >$$x_3 = \left(\frac{y_2 - y_1}{x_2 - x_1}\right)^2 - x_1 - x_2,
            \quad y_3 = \left(\frac{y_2 - y_1}{x_2 - x_1}\right)(x_1 - x_3)-
            y_1.$$</span
          >
        </p>
      </li>
      <li>
        <p>
          (<strong>Хоёрчлох</strong>):
          <span class="math inline"
            ><em>P</em> = (<em>x</em>,<em>y</em>) ∈ <em>E</em>(𝔽<sub
              ><em>p</em></sub
            >), <em>P</em> ≠  − <em>P</em></span
          >
          цэгийн хувьд
          <span class="math inline"
            ><em>P</em> + <em>P</em> = 2<em>P</em> = (<em>x</em><sub>3</sub>,<em
              >y</em
            ><sub>3</sub>)</span
          >
          цэг дараахаар илэрхийлэгдэнэ:
          <span class="math display"
            >$$x_3 = \left(\frac{3x_1^2 + a}{2y_1}\right)^2 - 2x_1, \quad y_3 =
            \left(\frac{3x_1^2 + a}{2y_1}\right)(x_1 - x_3)- y_1.$$</span
          >
        </p>
      </li>
    </ol>
    <h3 id="цэгийн-тоо-буюу-бүлгийн-эрэмбэ">Цэгийн тоо буюу бүлгийн эрэмбэ</h3>
    <p>
      <span class="math inline"
        >𝔽<sub><em>p</em></sub></span
      >
      төгсгөлөг талбар дээрх
      <span class="math inline"
        ><em>E</em>(𝔽<sub><em>p</em></sub
        >)</span
      >
      муруйн цэгүүдийн тоог
      <span class="math inline"
        >#<em>E</em>(𝔽<sub><em>p</em></sub
        >)</span
      >
      гэж тэмдэглээд муруйн <strong>эрэмбэ</strong> гэдэг. Аливаа
      <span class="math inline"
        ><em>x</em> ∈ 𝔽<sub><em>p</em></sub></span
      >
      бүрийн хувьд Вейерштрасын тэгшитгэлүүд хоёроос олонгүй шийдтэй тул
      <span class="math inline"
        >1 ≤ #<em>E</em>(𝔽<sub><em>p</em></sub
        >) ≤ 2<em>p</em> + 1</span
      >
      болно.
      <span class="math inline"
        >#<em>E</em>(𝔽<sub><em>p</em></sub
        >)</span
      >
      тоог ойролцоо тодорхойлдог Хассе(Hasse)-ийн теоремийг авч үзье.<br />
      <br />
      <strong>Теорем:</strong>(Hasse)
      <em
        ><span class="math inline"><em>E</em></span> нь
        <span class="math inline"
          >𝔽<sub><em>p</em></sub></span
        >
        талбар дээрх эллиптик муруй бол дараах биелнэ.</em
      >
      <span class="math display"
        >$$p + 1 - 2\sqrt{p} \leq \#E(\mathbb{F}_p) \leq p + 1 +
        2\sqrt{p}.$$</span
      >
      Энэ теоремын ач холбогдол нь
      <span class="math inline"><em>p</em></span> анхны тоо,
      <span class="math inline">$|t| \leq 2\sqrt{p}$</span> байх аливаа
      <span class="math inline"><em>t</em></span> тооны хувьд
      <span class="math inline"
        >#<em>E</em>(𝔽<sub><em>p</em></sub
        >) = <em>p</em> + 1 − <em>t</em></span
      >
      эрэмбэтэй
      <span class="math inline"
        >𝔽<sub><em>p</em></sub></span
      >
      талбар дээрх <span class="math inline"><em>E</em></span> эллиптик муруй
      оршин байна. Ийм <span class="math inline"><em>t</em></span> тоог
      <em>муруйн ул</em>(trace) гэдэг.
    </p>
    <h3 id="цэгийн-үржвэр">Цэгийн үржвэр</h3>
    <p>
      <span class="math inline"><em>k</em></span> бүхэл тоо ба
      <span class="math inline"
        ><em>P</em> ∈ <em>E</em>(𝔽<sub><em>p</em></sub
        >)</span
      >
      цэгийн хувьд өөрийг нь өөр дээр нэмэх буюу хоёрчлох үйлдэл дээр үндэслэн
      цэгийн <span class="math inline"><em>k</em></span> удаа нэмэхийг
      <span class="math inline"
        ><em>P</em> + <em>P</em> + ... + <em>P</em> = <em>k</em><em>P</em></span
      >
      гэж тэмдэглэн цэгийн үржих үйлдэл буюу "<strong
        ><em>цэгийн үржвэр</em></strong
      >" эсвэл "<strong><em>скаляр үржвэр</em></strong
      >" (Point multiplication) гэж нэрлэдэг.
    </p>
    <p>
      <span class="math inline"><em>k</em><em>P</em></span> нь муруйн өөр нэг
      цэгт буух ба <span class="math inline"><em>P</em></span
      >-ээр төрөгдсөн <span class="math inline">⟨<em>P</em>⟩</span> бүлгийн
      элемент байна. <span class="math inline"><em>k</em><em>P</em></span> утгыг
      хэрхэн үр ашигтай тооцоолох нь эллиптик муруйн криптосистемийн гүйцэтгэлд
      чухал үр нөлөөтэй. Бид <span class="math inline"><em>k</em></span> зэргийн
      хоёртын дүрслэлийг ашиглаж хоёрын зэрэгтүүдээрх нийлбэрийг (хоёрчлох
      үйлдлийг) давтах замаар цэгийн үржвэрийг олох алгоритмыг авч үзнэ.
    </p>
    <p>
      <span class="math inline"
        >#<em>E</em>(𝔽<sub><em>p</em></sub
        >) = <em>n</em><em>h</em></span
      >, энд <span class="math inline"><em>n</em></span> анхны тоо,
      <span class="math inline"><em>h</em></span> бага тоо (<span
        class="math inline"
        ><em>n</em> ≈ <em>q</em></span
      >), <span class="math inline"><em>P</em>, <em>Q</em></span> цэгүүд ижил
      <span class="math inline"><em>n</em></span> эрэмбэтэй ба үржүүлэгч
      <span class="math inline"><em>k</em></span> нь
      <span class="math inline">[1,<em>n</em>−1]</span> завсраас санамсаргүй
      сонгогдсон гэж үзнэ. <span class="math inline"><em>k</em></span> тооны
      хоёртын (бинар) дүрслэлийг
      <span class="math inline"
        >(<em>k</em><sub><em>s</em> − 1</sub>,...,<em>k</em><sub>2</sub>,<em
          >k</em
        ><sub>1</sub>,<em>k</em><sub>0</sub>)<sub>2</sub></span
      >
      гэе.
      <span class="math inline"
        ><em>s</em> ≈ <em>m</em> = ⌈<em>l</em><em>o</em><em>g</em><sub>2</sub
        ><em>p</em>⌉</span
      ><br />
      Алгоритм
      <a
        href="#SalgPointMult1"
        data-reference-type="ref"
        data-reference="SalgPointMult1"
        >[SalgPointMult1]</a
      >
      нь <span class="math inline"><em>k</em></span> тооны битүүдээр баруунаас
      зүүн, Алгоритм
      <a
        href="#SalgPointMult2"
        data-reference-type="ref"
        data-reference="SalgPointMult2"
        >[SalgPointMult2]</a
      >
      нь зүүнээс баруун тийш үйлдэнэ.
    </p>
    <div class="algorithm">
      <div class="algorithmic">
        <p>
          <span class="math inline"
            ><em>k</em> = (<em>k</em><sub><em>s</em> − 1</sub>,...,<em>k</em
            ><sub>2</sub>,<em>k</em><sub>1</sub>,<em>k</em
            ><sub>0</sub>)<sub>2</sub>, <em>P</em> ∈ <em>E</em>(𝔽<sub
              ><em>p</em></sub
            >)</span
          >
          <span class="math inline"><em>k</em><em>P</em></span>
          <span class="math inline"><em>Q</em> ← ∞</span>
          <span class="math inline"><em>Q</em> ← <em>Q</em> + <em>P</em></span
          >. <span class="math inline"><em>P</em> ← 2<em>P</em></span
          >. <strong>return</strong> <span class="math inline"><em>Q</em></span
          >.
        </p>
      </div>
    </div>
    <div class="algorithm">
      <div class="algorithmic">
        <p>
          <span class="math inline"
            ><em>k</em> = (<em>k</em><sub><em>s</em> − 1</sub>,...,<em>k</em
            ><sub>2</sub>,<em>k</em><sub>1</sub>,<em>k</em
            ><sub>0</sub>)<sub>2</sub>, <em>P</em> ∈ <em>E</em>(𝔽<sub
              ><em>p</em></sub
            >)</span
          >
          <span class="math inline"><em>k</em><em>P</em></span>
        </p>
        <p>
          <span class="math inline"><em>Q</em> ← ∞</span>
          <span class="math inline"><em>Q</em> ← 2<em>Q</em></span
          >.
          <span class="math inline"><em>Q</em> ← <em>Q</em> + <em>P</em></span
          >. <strong>return</strong> <span class="math inline"><em>Q</em></span
          >.
        </p>
      </div>
    </div>
    <h2 id="эллиптик-муруйн-дискрет-логарифмын-бодлого">
      Эллиптик муруйн Дискрет логарифмын бодлого
    </h2>
    <p>
      Эллиптик муруйн дискрет логарифмын бодлогын хүндрэл нь эллиптик муруйд
      суурилсан бүх криптографик схемүүдийн аюулгүй байдлын амин чухал үндэс нь
      болдог. Дараах тодорхойлолтоор өгөгдөх бодлогыг
      <strong>эллиптик муруйн дискрет логарифмын бодлого</strong> (ECDLP)
      гэнэ.<br />
      <br />
      <strong>Тодорхойлолт:</strong>
      <em
        ><span class="math inline"
          ><em>E</em>(𝔽<sub><em>p</em></sub
          >)</span
        >
        нь
        <span class="math inline"
          >𝔽<sub><em>p</em></sub></span
        >
        талбар дээр тодорхойлогдсон эллиптик муруй (бүлэг),
        <span class="math inline"
          ><em>P</em> ∈ <em>E</em>(𝔽<sub><em>p</em></sub
          >)</span
        >
        нь <span class="math inline"><em>n</em></span
        >-эрэмбийн цэг (ө.х
        <span class="math inline"><em>n</em><em>P</em> = ∞</span>).
        <span class="math inline"><em>Q</em> ∈ ⟨<em>P</em>⟩</span> дэд бүлэгт
        харъяалагдах цэг болог.
        <span class="math inline"><em>Q</em> = <em>k</em><em>P</em></span> байх
        <span class="math inline"><em>k</em></span> тоог
        <span class="math inline"><em>Q</em></span> цэгийн
        <span class="math inline"><em>P</em></span> суурьтай дискрет логарифм
        гэж нэрлээд формалаар
        <span class="math inline"
          ><em>k</em> = log<sub><em>P</em></sub
          ><em>Q</em></span
        >
        гэж тэмдэглэн бичнэ.</em
      ><br />
      ECDLP-ийн хүнд хөнгөнөөс эллиптик муруйн криптографын нууцлалын хүнд,
      хөнгөн эсэх нь хамаардаг. Хар ухаанаар
      <span class="math inline"><em>Q</em> = <em>k</em><em>P</em></span> байх
      <span class="math inline"><em>k</em></span> тоог олоё гэвэл
      <span class="math inline"><em>P</em>, 2<em>P</em>, 3<em>P</em>, ...</span>
      гэх мэт <span class="math inline"><em>P</em></span
      >-гийн давтамжуудыг тооцон олж болох мэт харагдаж байвч
      <span class="math inline"><em>k</em></span
      >-маш том тоо үед энэ тооцоо практик боломжгүй. Ингэхдээ хамгийн багадаа
      <span class="math inline">$\frac{n}{2}$</span>-оос цөөнгүй удаа
      <span class="math inline"><em>P</em></span
      >-ийн давтамжийг бодох хэрэгтэй болдог. Иймд
      <span class="math inline"><em>k</em></span
      >-тоог өнөөдрийн компьютерийн тооцоолох хүчин чадлаас давсан байхаар
      сонгосон бол энэ маш хүнд бодлого байх юм.
    </p>
    <p>
      ECDLP-д довтлох янз бүрийн аргууд байдаг. Тэдгээр довтолгооноос
      зайлсхийхийн тулд
      <span class="math inline"
        >#<em>E</em>(𝔽<sub><em>p</em></sub
        >)</span
      >
      нь том анхны тоо <span class="math inline"><em>n</em></span
      >-д хуваагдахаас гадна практик нууцлалаас хамаарч хамгийн багадаа
      <span class="math inline"><em>n</em> &gt; 2<sup>160</sup></span> тоо байх
      ёстой. Бас
      <span class="math inline"
        >#<em>E</em>(𝔽<sub><em>p</em></sub
        >) = <em>n</em><em>h</em></span
      >
      дахь <span class="math inline"><em>h</em></span
      >- үржигдэхүүн (кофактор) их бага тоо (тухайлбал
      <span class="math inline"><em>h</em> = 1, 2, 3</span> бол сайн) байх
      хэрэгтэй. Энэ нь
      <span class="math inline"
        >#<em>E</em>(𝔽<sub><em>p</em></sub
        >)</span
      >
      тоо бараг л анхны тоо байна гэдэг санааг илэрхийлнэ. Тэрчлэн олон
      довтолгооноос хамаарч
      <span class="math inline"
        >#<em>E</em>(𝔽<sub><em>p</em></sub
        >) ≠ <em>p</em></span
      >
      байх ба <span class="math inline"><em>n</em></span> анхны тоо
      <span class="math inline"
        ><em>p</em><sup><em>k</em></sup
        > − 1</span
      >-ийг (<span class="math inline">1 ≤ <em>k</em> ≤ <em>c</em></span
      >) хуваахгүй бөгөөд <span class="math inline"><em>c</em></span
      >-тоо хангалттай том,
      <span class="math inline"
        >𝔽<sub
          ><em>p</em><sup><em>c</em></sup></sub
        ><sup>*</sup></span
      >-гийн хувьд ECDLP-ын довтолгоонд оромгүй хүнд байхаар авна, практикт
      <span class="math inline"><em>n</em> &gt; 2<sup>160</sup></span> үед
      <span class="math inline"><em>c</em> = 20</span> байхад боломжтой байдаг.
    </p>
    <h2 id="эллиптик-муруйн-криптосистем">Эллиптик муруйн криптосистем</h2>
    <p>
      Практикт нийтийн түлхүүрт шифр схем нь нууц түлхүүрт буюу симметр түлхүүрт
      схемээс илүү удаан ажиллагаатай тул ихэнхдээ зөвхөн бага хэмжээний өгөгдөл
      (картын дугаар, PIN код, дамжуулагдах симметр түлхүүр /session key/
      зэрэг)-ийг шифрлэхэд хэрэглэдэг.<br />
      Эллиптик муруйн нийтийн түлхүүрт бүх криптосистемүүд нь ECDLP-д суурилна.
      Иймд бид сайн криптосистемийг загварчлах нь ECDLP нь найдвартай байх
      аюулгүй байдлын шаардлагыг бүрэн хангасан сайн домайн параметрийг үүсгэх
      явдал юм.
    </p>
    <h3 id="эллиптик-муруйн-түлхүүрийн-хос-үүсгэх">
      Эллиптик муруйн түлхүүрийн хос үүсгэх
    </h3>
    <p>
      Эллиптик муруйн криптосистемд түлхүүрийн хос
      <span class="math inline">(<em>d</em>,<em>Q</em>)</span>-г эллиптик муруйн
      домайн (анхны) параметрүүдийг үндэслэн сонгоно. Энд эллиптик муруйн
      системийн домайн параметр
      <span class="math inline"
        >𝒟 = (<em>p</em>,<em>a</em>,<em>b</em>,<em>G</em>,<em>n</em>,<em>h</em>)</span
      >
      нь өмнөх сэдвүүдэд дурдсан бүх шаардлагуудыг хангасан байхаар өөрсдийн
      найдвартай аюулгүй параметр байдлаар бид үүсгэх нь хамгийн чухал.
      <span class="math inline"
        ><em>G</em> ∈ <em>E</em>(𝔽<sub><em>p</em></sub
        >)</span
      >
      цэгээр төрөгдсөн <span class="math inline">⟨<em>G</em>⟩</span> бүлгээс
      санамсаргүйгээр сонгосон <span class="math inline"><em>Q</em></span> цэг
      нь <strong><em>нийтийн түлхүүр</em></strong> болно. Харгалзах
      <strong><em>далд түлхүүр</em></strong> нь
      <span class="math inline"><em>Q</em> = <em>d</em><em>G</em></span> байх
      <span class="math inline"><em>d</em> ∈ [1,<em>n</em>−1]</span> тоо
      байна.<br />
      Практикт түлхүүрийн хосыг хэрхэн сонгох (Алгоритм
      <a
        href="#SalgKeyGen"
        data-reference-type="ref"
        data-reference="SalgKeyGen"
        >[SalgKeyGen]</a
      >), үнэн сонгогдсон эсэхийг хэрхэн шалгах (Алгоритм
      <a
        href="#SalgPubKeyVal"
        data-reference-type="ref"
        data-reference="SalgPubKeyVal"
        >[SalgPubKeyVal]</a
      >) тухай авч үзье.
    </p>
    <div class="algorithm">
      <div class="algorithmic">
        <p>
          <span class="math inline"
            >𝒟 = (<em>p</em>,<em>a</em>,<em>b</em>,<em>G</em>,<em>n</em>,<em>h</em>)</span
          >
          -домайн параметр нийтийн түлхүүр
          <span class="math inline"><em>Q</em></span
          >, далд түлхүүр <span class="math inline"><em>d</em></span
          >.
          <span class="math inline"
            >$d \stackrel{\text{R}}{\longleftarrow} [1,n-1]$</span
          >
          тоог санамсаргүйгээр сонгоно
          <span class="math inline"><em>Q</em> ← <em>d</em><em>G</em></span>
          утгыг тооцно <strong>return</strong>
          <span class="math inline">(<em>Q</em>,<em>d</em>)</span>
        </p>
      </div>
    </div>
    <p>
      <br />
      Нийтийн түлхүүр <span class="math inline"><em>Q</em></span
      >-ээс хувийн түлхүүр <span class="math inline"><em>d</em></span
      >-г тооцоолох бодлого нь ECDLP болно. Тиймд домайн параметр
      <span class="math inline">𝒟</span>-ийг ECDLP нь маш хүнд байхаар сонгох нь
      хамгийн чухал. Цаашлаад, үүсгэж байгаа
      <span class="math inline"><em>d</em></span> тоо нь хүрэлцээтэй бага,
      санамсаргүй байх нь чухал бөгөөд энэ нь гуравдагч этгээд өөрийн хайх
      стратегиэ оновчтой болгох замаар ашигтай байдал үүсгэхээс урьдчилан
      сэргийлнэ.
    </p>
    <h3 id="нийтийн-түлхүүрийг-шалгах">Нийтийн түлхүүрийг шалгах</h3>
    <p>
      Нийтийн түлхүүрийн шалгалтын зорилго нь тодорхой арифметик шинж чанарыг
      хангадаг болохыг шалгаж баталгаажуулах явдал юм. Нийтийн түлхүүрийг
      баталгаажуулснаар түүнд харгалзах хувийн түлхүүр оршин байгаа болохыг
      харуулж байгаа хэдий ч өөр ямар нэг этгээд уг хувийн түлхүүрийг тооцоолсон
      эсвэл түлхүүр эзэмшигч үнэхээр уг хувийн түлхүүртэй эсэхийг шалгаж байгаа
      хэрэг биш юм. Нийтийн түлхүүрийн шалгалт нь Диффи-Хеллман (DH)-ий схемд
      тулгуурлагдсан протоколуудад нэн чухал хэрэгтэй байдаг. Диффи-Хеллманий
      протоколд <span class="math inline"><em>A</em></span> этгээд нь нөгөө
      <span class="math inline"><em>B</em></span> этгээдээс авсан нийтийн
      түлхүүр болон өөрийн хувийн түлхүүрийг хольж хамтын нууц түлхүүр
      <span class="math inline"><em>k</em></span
      >-г гарган аваад дараа нь түүнийгээ симметр протокол (мэдээг нууцлах эсвэл
      баталгаажуулах г.м.)-д ашигладаг билээ.
      <span class="math inline"><em>B</em></span> этгээд буруу нийтийн түлхүүр
      сонгосон тохиолдолд <span class="math inline"><em>k</em></span
      >-г хэрэглэх нь <span class="math inline"><em>A</em></span
      >-гийн хувийн түлхүүрийн талаарх мэдээллийг алдаж болзошгүй юм.
    </p>
    <div class="algorithm">
      <div class="algorithmic">
        <p>
          <span class="math inline"
            >𝒟 = (<em>p</em>,<em>a</em>,<em>b</em>,<em>G</em>,<em>n</em>,<em>h</em>)</span
          >
          -домайн параметр, <span class="math inline"><em>Q</em></span> -
          нийтийн түлхүүр.
          <span class="math inline"><em>Q</em></span> түлхүүрийн хүчинтэй
          эсэхийг "<strong>зөвшөөрсөн</strong>" эсвэл
          "<strong>татгалзсан</strong>"
          <span class="math inline"><em>Q</em> ≠ ∞</span> болохыг шалгах.
          <span class="math inline"
            ><em>x</em><sub><em>Q</em></sub
            >, <em>y</em><sub><em>Q</em></sub></span
          >
          координатууд
          <span class="math inline"
            >𝔽<sub><em>p</em></sub></span
          >
          талбарын элементээр дүрслэгдсэн болохыг шалгах.
          <span class="math inline"
            ><em>Q</em> ∈ <em>E</em>(𝔽<sub><em>p</em></sub
            >)</span
          >-г шалгах (ө.х,
          <span class="math inline"
            ><em>y</em><sub><em>Q</em></sub
            ><sup>2</sup> = <em>x</em><sub><em>Q</em></sub
            ><sup>3</sup> + <em>a</em><em>x</em><sub><em>Q</em></sub
            > + <em>b</em></span
          >). <span class="math inline"><em>n</em><em>Q</em> = ∞</span> болохыг
          шалгах. <strong>return</strong> "зөвшөөрсөн"
          <strong>return</strong> "татгалзсан"
        </p>
      </div>
    </div>
    <h3 id="эллиптик-муруйн-диффи-хэллмэнийн-түлхүүр-солилцох-протокол---ecdh">
      Эллиптик муруйн Диффи-Хэллмэнийн түлхүүр солилцох протокол - ECDH
    </h3>
    <p>
      Бид <code>2.4.2</code> дээр эллиптик муруйн түлхүүрийн хос үүсгэсэн. Харин
      энэхүү протокол нь хэрэглэгчид хэрхэн өөрсдийн нийтийн түлхүүрийн
      тусламжтайгаар <strong>дундын нууц түлхүүр</strong> (shared secret key)
      үүсгэх талаар ярилцах юм. Өөрөөр хэлбэл эллиптик муруйн Диффи-Хэллмэнийн
      түлхүүр солилцох протокол нь хоёр хэрэглэгч хоорондоо харилцах
      шаардлагатай үед зөвхөн өөрсдийн үүсгэсэн нийтийн түлхүүрийг бие биедээ
      дамжуулснаар дундын ижилхэн түлхүүр гаргаж авах тухай юм.<br />
      <br />
      <code>2.4.1</code>-ийн <code>Algorithm 3</code> ашиглан хэрэглэгчид (Q, d)
      болон (Q’, d’) гэх хос түлхүүр харгалзан үүсгэсэн гэе. Талууд ижил домайн
      параметрууд ашиглан өөрсдийн түлхүүрүүдийг үүсгэсэн учраас дундын нууц
      түлхүүрээ дараах байдлаар тооцоолно.<br />
      <br />
      <span class="math display"
        ><em>d</em><em>Q</em>′ = <em>d</em
        ><em>d</em>′<em>G</em> = <em>d</em>′<em>d</em
        ><em>G</em> = <em>d</em>′<em>Q</em></span
      >
    </p>
    <p>
      Өөрөөр хэлбэл эхний хэрэглэгчийн тооцоолсон дундын нууц түлхүүр dQ’ болон
      нөгөө хэрэглэгчийн тооцоолсон дундын нууц түлхүүр d’Q нь хоорондоо ижил
      байх юм.
    </p>
    <h3 id="эллиптик-муруйн-тоон-гарын-үсэг-ecdsa">
      Эллиптик муруйн тоон гарын үсэг (ECDSA)
    </h3>
    <p>
      Тоон гарын үсгийн схем нь гараар зурагддаг бичгэн гарын үсгийн тоон
      хувилбар болох ойлголт юм. Энэ нь мэдээллийн эхийн баталгаажуулалт, бүрэн
      бүтэн байдал, үл татгалзах байдлыг батлахад хэрэглэгддэг. Гарын үсгийн
      схем нь ихэвчлэн тухайн тал, түүний нийтийн түлхүүр хоёрыг холбох
      сертификатад гарын үсэг зурахад итгэмжлэгдсэн сертификатжуулагч талаар
      хийгдэнэ.<br />
      Эллиптик муруйн тоон гарын үсгийн алгоритм (The Elliptic Curve Digital
      Signature Algorithm - ECDSA) нь тоон талбар дээрх гарын үсгийн алгоритм
      (DSA)-ын эллиптик муруй дээрх аналоги хувилбар юм. ECDSA нь хамгийн өргөн
      стандартчилагдсан эллиптик муруйд суурилсан гарын үсгийн схем ба ANSI
      X9.62, FIPS 186-2, IEEE 1363-2000, ISO/IEC 15946-2 зэрэг стандартуудад
      тусгагдсан байдаг. ECDSA алгоритмд бид өөрсдийн үүсгэсэн стандарт бус
      домайн параметрийг ашигласнаар аюулгүй, найдвартай тоон гарын үсгийг
      ашиглах боломжтой болох юм.<br />
      Гарын үсэг зурах нь Алгоритм
      <a
        href="#SalgECDSAsign"
        data-reference-type="ref"
        data-reference="SalgECDSAsign"
        >[SalgECDSAsign]</a
      >-аар өгөгдөнө. Алгоритмд криптографик хеш функц
      <span class="math inline"></span>-ийн гаралт нь
      <span class="math inline"><em>n</em></span
      >-ээс ихгүй бит урттай байна.
    </p>
    <div class="algorithm">
      <div class="algorithmic">
        <p>
          <span class="math inline"
            >𝒟 = (<em>p</em>,<em>a</em>,<em>b</em>,<em>G</em>,<em>n</em>,<em>h</em>)</span
          >, <span class="math inline"><em>M</em></span> -мэдээ,
          <span class="math inline"><em>d</em></span> хувийн түлхүүр. Гарын үсэг
          <span class="math inline">(<em>r</em>,<em>s</em>)</span>
          <span class="math inline"
            >$k \stackrel{\text{R}}{\longleftarrow} [1,p-1]$</span
          >
          <span class="math inline"
            ><em>Z</em> = (<em>x</em><sub><em>Z</em></sub
            >,<em>y</em><sub><em>Z</em></sub
            >) ← <em>k</em><em>G</em></span
          >
          утгыг тооцох;
          <span class="math inline"
            ><em>r</em> ← <em>x</em><sub><em>Z</em></sub></span
          >  mod<span class="math inline"><em>n</em></span> 1-р алхамд шилжих;
          <span class="math inline"
            ><em>e</em> ← <em>H</em><em>A</em><em>S</em><em>H</em>(<em>h</em
            ><em>l</em><em>e</em><em>n</em>,<em>M</em>)</span
          >
        </p>
        <p>
          <span class="math inline"
            ><em>s</em> ← <em>k</em><sup>−1</sup>(<em>e</em>+<em>d</em
            ><em>r</em>)</span
          >  mod<span class="math inline"><em>n</em></span> тооцох; 1-р алхамд
          шилжих; <strong>return</strong>
          <span class="math inline">(<em>r</em>,<em>s</em>)</span>.
        </p>
      </div>
    </div>
    <p>
      Гарын үсэг шалгах нь Алгоритм
      <a
        href="#SalgECDSAverify"
        data-reference-type="ref"
        data-reference="SalgECDSAverify"
        >[SalgECDSAverify]</a
      >-аар өгөгдөнө:
    </p>
    <div class="algorithm">
      <div class="algorithmic">
        <p>
          <span class="math inline"
            >𝒟 = (<em>p</em>,<em>a</em>,<em>b</em>,<em>G</em>,<em>n</em>,<em>h</em>)</span
          >, <span class="math inline"><em>M</em></span> -мэдээ,
          <span class="math inline"><em>Q</em></span> нийтийн түлхүүр, гарын
          үсэг <span class="math inline">(<em>r</em>,<em>s</em>)</span>. Гарын
          үсгийг "<strong>зөвшөөрөх</strong>" эсвэл
          "<strong>татгалзах</strong>".
        </p>
        <p>
          . <strong>return</strong> "татгалзах".
          <span class="math inline"
            ><em>e</em> ← <em>H</em><em>A</em><em>S</em><em>H</em>(<em>h</em
            ><em>l</em><em>e</em><em>n</em>,<em>M</em>)</span
          >
          тооцох.
          <span class="math inline"><em>w</em> ← <em>s</em><sup>−1</sup></span
          >  mod<span class="math inline"><em>n</em></span
          >.
          <span class="math inline"
            ><em>u</em><sub>1</sub> ← <em>e</em><em>w</em></span
          > mod<span class="math inline"><em>n</em></span
          >.
          <span class="math inline"
            ><em>u</em><sub>2</sub> ← <em>r</em><em>w</em></span
          >  mod <span class="math inline"><em>n</em></span
          >.
          <span class="math inline"
            ><em>Z</em> ← <em>u</em><sub>1</sub><em>G</em> + <em>u</em
            ><sub>2</sub><em>Q</em></span
          >.
          <span class="math inline"
            ><em>Z</em> = (<em>x</em><sub><em>Z</em></sub
            >,<em>y</em><sub><em>Z</em></sub
            >)</span
          >
          <strong>return</strong> "татгалзах".
          <span class="math inline"
            ><em>v</em> ← <em>x</em><sub><em>Z</em></sub></span
          > mod<span class="math inline"><em>n</em></span
          >. <strong>return</strong> "зөвшөөрөх".
          <strong>return</strong> "татгалзах".
        </p>
      </div>
    </div>
    <p>
      Гарын үсгийн шалгалт нь хэрхэн ажиллахыг баталья:
      <span class="math inline"><em>M</em></span> мэдээний хувьд үүсгэгдсэн
      гарын үсэг <span class="math inline">(<em>r</em>,<em>s</em>)</span> бол
      <span class="math inline"
        ><em>s</em> ≡ <em>k</em><sup>−1</sup>(<em>e</em>+<em>d</em
        ><em>r</em>)(<em>m</em><em>o</em><em>d</em><em>n</em>)</span
      >
      болно. Эндээс дараах биелнэ.
      <span class="math display"
        ><em>k</em> ≡ <em>s</em><sup>−1</sup>(<em>e</em>+<em>d</em
        ><em>r</em>) ≡ <em>s</em><sup>−1</sup><em>e</em> + <em>s</em
        ><sup>−1</sup><em>r</em><em>d</em> ≡ <em>w</em><em>e</em> + <em>w</em
        ><em>r</em><em>d</em> ≡ <em>u</em><sub>1</sub> + <em>u</em><sub>2</sub
        ><em>d</em>(<em>m</em><em>o</em><em>d</em><em>n</em>).</span
      >
      Иймд
      <span class="math inline"
        ><em>X</em> = <em>u</em><sub>1</sub><em>G</em> + <em>u</em><sub>2</sub
        ><em>Q</em> = (<em>u</em><sub>1</sub>+<em>u</em><sub>2</sub
        ><em>d</em>)<em>G</em> = <em>k</em><em>G</em></span
      >
      болох ба <span class="math inline"><em>v</em> = <em>r</em></span> биелэх
      юм.
    </p>
  </body>
</html>
`;

/*
 <style>
      html {
        color: #1a1a1a;
        background-color: #fdfdfd;
      }
      body {
        margin: 0 auto;
        max-width: 36em;
        padding-left: 50px;
        padding-right: 50px;
        padding-top: 50px;
        padding-bottom: 50px;
        hyphens: auto;
        overflow-wrap: break-word;
        text-rendering: optimizeLegibility;
        font-kerning: normal;
      }
      @media (max-width: 600px) {
        body {
          font-size: 0.9em;
          padding: 12px;
        }
        h1 {
          font-size: 1.8em;
        }
      }
      @media print {
        html {
          background-color: white;
        }
        body {
          background-color: transparent;
          color: black;
          font-size: 12pt;
        }
        p,
        h2,
        h3 {
          orphans: 3;
          widows: 3;
        }
        h2,
        h3,
        h4 {
          page-break-after: avoid;
        }
      }
      p {
        margin: 1em 0;
      }
      a {
        color: #1a1a1a;
      }
      a:visited {
        color: #1a1a1a;
      }
      img {
        max-width: 100%;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin-top: 1.4em;
      }
      h5,
      h6 {
        font-size: 1em;
        font-style: italic;
      }
      h6 {
        font-weight: normal;
      }
      ol,
      ul {
        padding-left: 1.7em;
        margin-top: 1em;
      }
      li > ol,
      li > ul {
        margin-top: 0;
      }
      blockquote {
        margin: 1em 0 1em 1.7em;
        padding-left: 1em;
        border-left: 2px solid #e6e6e6;
        color: #606060;
      }
      code {
        font-family: Menlo, Monaco, Consolas, "Lucida Console", monospace;
        font-size: 85%;
        margin: 0;
        hyphens: manual;
      }
      pre {
        margin: 1em 0;
        overflow: auto;
      }
      pre code {
        padding: 0;
        overflow: visible;
        overflow-wrap: normal;
      }
      .sourceCode {
        background-color: transparent;
        overflow: visible;
      }
      hr {
        background-color: #1a1a1a;
        border: none;
        height: 1px;
        margin: 1em 0;
      }
      table {
        margin: 1em 0;
        border-collapse: collapse;
        width: 100%;
        overflow-x: auto;
        display: block;
        font-variant-numeric: lining-nums tabular-nums;
      }
      table caption {
        margin-bottom: 0.75em;
      }
      tbody {
        margin-top: 0.5em;
        border-top: 1px solid #1a1a1a;
        border-bottom: 1px solid #1a1a1a;
      }
      th {
        border-top: 1px solid #1a1a1a;
        padding: 0.25em 0.5em 0.25em 0.5em;
      }
      td {
        padding: 0.125em 0.5em 0.25em 0.5em;
      }
      header {
        margin-bottom: 4em;
        text-align: center;
      }
      #TOC li {
        list-style: none;
      }
      #TOC ul {
        padding-left: 1.3em;
      }
      #TOC > ul {
        padding-left: 0;
      }
      #TOC a:not(:hover) {
        text-decoration: none;
      }
      code {
        white-space: pre-wrap;
      }
      span.smallcaps {
        font-variant: small-caps;
      }
      div.columns {
        display: flex;
        gap: min(4vw, 1.5em);
      }
      div.column {
        flex: auto;
        overflow-x: auto;
      }
      div.hanging-indent {
        margin-left: 1.5em;
        text-indent: -1.5em;
      }
      ul.task-list {
        list-style: none;
      }
      ul.task-list li input[type="checkbox"] {
        width: 0.8em;
        margin: 0 0.8em 0.2em -1.6em;
        vertical-align: middle;
      }
      .display.math {
        display: block;
        text-align: center;
        margin: 0.5rem auto;
      }
    </style>


    // onoliin heseg

        <h2 id="эллиптик-муруйн-математик-үндэс">
      Эллиптик муруйн математик үндэс
    </h2>
    <p>
      Энэхүү хэсэгт эллиптик муруйн тодорхойлолт, түүний арифметик үйлдэл болоод
      эллиптик муруйн криптографийн хэрэгжүүлэлтийн тухай авч үзнэ.
    </p>
    <h3 id="талбарын-арифметик">Талбарын арифметик</h3>
    <p>
      Талбар нь хоёр үйлдэлтэй ба тэдгээрт харгалзах урвуу үйлдэл болон адилтгал
      элемент бүхий шинж чанартай олонлогоос тогтох алгебрлаг систем юм. Бид
      талбарын талаар тодорхойлолт болоод ашиглах хүрээнээс хамаарч төгсгөлөг
      элементтэй талбарын ойлголтыг товч авч үзэх болно.
    </p>
    <h3 id="талбар">Талбар</h3>
    <p>
      <strong>Тодорхойлолт:</strong>
      <em
        >Нэмэх (<span class="math inline">$"+"$</span>-ээр тэмдэглэх), үржих
        (<span class="math inline">$"\cdot"$</span>-ээр тэмдэглэх) гэсэн хоёр
        үйлдэлтэй, дараах чанарыг хангах
        <span class="math inline">𝔽</span> олонлогийн бүлийг
        <strong>талбар</strong> <em>гэнэ</em>.</em
      >
    </p>
    <ol>
      <li>
        <p>
          <em
            ><span class="math inline">(𝔽,+)</span> нь
            <span class="math inline">$"0"$</span> гэж тэмдэглэсэн нэгж
            элементтэй Абелийн бүлэг байна.<br />
            (Аддитив бүлэг)</em
          >
        </p>
      </li>
      <li>
        <p>
          <em
            ><span class="math inline">(𝔽<sup>*</sup>,⋅)</span> нь
            <span class="math inline">$"1"$</span>гэж тэмдэглэсэн нэгж
            элементтэй Абелийн бүлэг байна.<br />
            (Мультифликатив бүлэг)</em
          ><br />
          <span class="math inline">𝔽<sup>*</sup> = 𝔽 \ {0}</span>
        </p>
      </li>
      <li>
        <p>
          <span class="math inline"
            >∀<em>a</em>, <em>b</em>, <em>c</em> ∈ 𝔽 : <em>a</em> ⋅ (<em>b</em>+<em>c</em>) = <em>a</em> ⋅ <em>b</em> + <em>a</em> ⋅ <em
              >c</em
            ></span
          >
          <span class="math inline">(</span><em>Дистрибутив хууль</em
          ><span class="math inline">)</span>
        </p>
      </li>
    </ol>
    <p>
      Хэрэв <span class="math inline">𝔽</span> талбарын элементийн тоо нь
      төгсгөлөг бол түүнийг <strong>төгсгөлөг талбар</strong> гэнэ.
    </p>
    <h3 id="талбарын-үйлдэл">Талбарын үйлдэл</h3>
    <p>
      <span class="math inline">𝔽</span> талбарын хувьд нэмэх, үржих хоёр үйлдэл
      тодорхойлогдсон. Тэгвэл элементүүдийн "<strong>хасах</strong>"<br />
      үйлдэл нь нэмэхийн утгаар тодорхойлогдоно:
      <span class="math inline"
        ><em>a</em
        >, <em>b</em> ∈ 𝔽, <em>a</em> − <em>b</em> = <em>a</em> + (−<em>b</em>)</span
      >, энд <span class="math inline"> − <em>b</em></span> нь
      <span class="math inline"><em>b</em> + (−<em>b</em>) = 0</span> байх
      <span class="math inline">𝔽</span> талбар дахь цорын ганц элемент. (
      <span class="math inline"> − <em>b</em></span> элементийг
      <span class="math inline"><em>b</em></span
      >-ийн <em>сөрөг</em> элемент гэнэ). Мөн адилаар, элементүүдийн
      "<strong>хуваах</strong>" үйлдэл нь үржихийн утгаар тодорхойлогдоно:
      <span class="math inline"
        ><em>a</em>, <em>b</em> ∈ 𝔽, <em>b</em> ≠ 0</span
      >
      хувьд
      <span class="math inline"
        ><em>a</em>/<em>b</em> = <em>a</em> ⋅ <em>b</em><sup>−1</sup></span
      >, энд <span class="math inline"><em>b</em><sup>−1</sup></span> нь
      <span class="math inline"><em>b</em> ⋅ <em>b</em><sup>−1</sup> = 1</span>
      байх <span class="math inline">𝔽</span> талбар дахь цорын ганц элемент.
      (<span class="math inline"><em>b</em><sup>−1</sup></span> элементийг
      <span class="math inline"><em>b</em></span
      >-ийн <em>урвуу</em> элемент гэнэ).<br />
      <br />
      <strong>Теорем:</strong> 
      <em
        >Хэрэв <span class="math inline">𝔽</span> нь
        <span class="math inline"><em>q</em></span> элементтэй
        <span class="math inline">(|𝔽|=<em>q</em>)</span> төгсгөлөг талбар бол
        <span class="math inline"><em>q</em></span> нь анхны тооны зэрэг байна.
        Ө.х
        <span class="math inline"
          ><em>q</em> = <em>p</em><sup><em>m</em></sup
          >, <em>p</em> ∈ ℙ.</span
        >
        Ийм  <span class="math inline"><em>p</em></span> тоог талбарын
        <strong>характеристик</strong> гэж нэрлэдэг.</em
      ><br />
      <span class="math inline"
        ><em>q</em> = <em>p</em><sup><em>m</em></sup></span
      >
      элементтэй төгсгөлөг талбарыг Галуагийн талбар гэж нэрлэдэг ба
      <span class="math inline"
        >𝔽<sub
          ><em>p</em><sup><em>m</em></sup></sub
        ></span
      >
      эсвэл
      <span class="math inline"
        ><em>G</em><em>F</em>(<em>p</em><sup><em>m</em></sup
        >)</span
      >
      гэж тэмдэглэнэ.<br />
      Хэрэв <span class="math inline"><em>m</em> = 1</span> бол
      <span class="math inline"
        >𝔽<sub><em>p</em></sub></span
      >
      -ийг анхны талбар, <span class="math inline"><em>m</em> ≥ 2</span> бол
      <span class="math inline"
        >𝔽<sub
          ><em>p</em><sup><em>m</em></sup></sub
        ></span
      >-ийг өргөтгөсөн талбар гэнэ.<br />
      <br />
      <strong>Теорем:</strong>  
      <em
        ><span class="math inline"
          >𝔽<sub><em>q</em></sub></span
        >
        төгсгөлөг талбарын хувьд
        <span class="math display"
          >𝔽<sub><em>q</em></sub
          ><sup>*</sup> = {1, <em>g</em>, <em>g</em><sup>2</sup>, <em>g</em
          ><sup>3</sup>, ..., <em>g</em><sup><em>q</em> − 2</sup>}</span
        >
        байх
        <span class="math inline"
          ><em>g</em> ∈ 𝔽<sub><em>q</em></sub></span
        >
        элемент оршин байна. Өөрөөр хэлбэл,
        <span class="math inline"
          >(𝔽<sub><em>q</em></sub
          ><sup>*</sup>,⋅)</span
        >
        нь цикл бүлэг байна. Ийм <span class="math inline"><em>g</em></span
        >-г талбарын <strong><em>үүгэгч</em></strong> элемент
        <span class="math inline">(</span><em>примитив язгуур</em
        ><span class="math inline">)</span> гэж нэрлэдэг.</em
      >
    </p>
    <h3 id="анхны-талбар">Анхны талбар</h3>
    <p>
      <span class="math inline"><em>p</em></span> анхны тооны хувьд
      <span class="math inline"><em>p</em></span> модулиар нэмэх, үржих
      үйлдлээрх үлдэгдлийн бүхэл тоонуудын олонлог
      <span class="math inline">{0, 1, 2, ..., <em>p</em> − 1}</span> нь
      <span class="math inline"><em>p</em></span> эрэмбийн төгсгөлөг талбар
      болно. Энэ талбарыг
      <span class="math inline"
        >𝔽<sub><em>p</em></sub></span
      >
      гэж тэмдэглэе. Аливаа <span class="math inline"><em>a</em></span> бүхэл
      тооны хувьд <span class="math inline"><em>p</em></span
      >-д хуваахад гарах
      <span class="math inline"><em>r</em> (0≤<em>r</em>≤<em>p</em>−1)</span>
      үлдэгдлийг
      <span class="math inline"
        ><em>a</em> <em>m</em><em>o</em><em>d</em><em>p</em></span
      >
      гэж тэмдэглэнэ.<br />
      <span class="math inline"
        ><em>a</em>, <em>b</em> ∈ 𝔽<sub><em>p</em></sub></span
      >
      тоонуудын анхны талбар
      <span class="math inline"
        >𝔽<sub><em>p</em></sub></span
      >
      дээрх үйлдлүүд дараах байдлаар хийгдэнэ.
      <span class="math display"
        ><em>a</em> + <em>b</em> ≡ (<em>a</em>+<em>b</em>) <em>m</em><em>o</em
        ><em>d</em
        ><em>p</em>,  <em>a</em> ⋅ <em>b</em> ≡ (<em>a</em>⋅<em>b</em>) <em
          >m</em
        ><em>o</em><em>d</em><em>p</em></span
      >
      <strong>Жишээ:</strong> (<span class="math inline">𝔽<sub>29</sub></span>
      -анхны талбар) 
      <span class="math inline">𝔽<sub>29</sub> ≡ {0, 1, 2, ..., 28}</span>.
      <span class="math inline">𝔽<sub>29</sub></span> талбарт дараах арифметик
      үйлдлүүдийн жишээ биелэнэ:
    </p>
    <ol>
      <li>
        <p>
          Нэмэх: <span class="math inline">17 + 20 = 8</span>, энд
          <span class="math inline"
            >37 <em>m</em><em>o</em><em>d</em> 29 = 8</span
          >.
        </p>
      </li>
      <li>
        <p>
          Хасах: <span class="math inline">17 − 20 = 26</span>, энд
          <span class="math inline"
            > − 3 <em>m</em><em>o</em><em>d</em> 29 = 26</span
          >.
        </p>
      </li>
      <li>
        <p>
          Үржих: <span class="math inline">17 ⋅ 20 = 21</span>, энд
          <span class="math inline"
            >340 <em>m</em><em>o</em><em>d</em> 29 = 21</span
          >.
        </p>
      </li>
      <li>
        <p>
          Урвуу: <span class="math inline">17<sup>−1</sup> = 12</span>, энд
          <span class="math inline"
            >17 ⋅ 12 <em>m</em><em>o</em><em>d</em> 29 = 1</span
          >.
        </p>
      </li>
    </ol>
*/

export default Test;
