import SectionDivider from "../components/SectionDivider.jsx";
import { Link } from "react-router";

function Chapter({ number, title, label, children, imageSlot, id }) {
  return (
    <article id={id} style={{ marginBottom: "3.5rem" }}>
      {/* Chapter label */}
      <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <p style={{ fontFamily: "'Cinzel', serif", color: "#5a7a38", fontSize: "0.62rem", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
          {label}
        </p>
        <h2
          style={{
            fontFamily: "'Cinzel', serif",
            color: "#c8b050",
            fontSize: "clamp(1.3rem, 3.5vw, 2.2rem)",
            letterSpacing: "0.12em",
            lineHeight: 1.2,
          }}
        >
          {title}
        </h2>
      </div>

      {/* Image slot */}
      {imageSlot && (
        <div
          style={{
            width: "100%",
            maxWidth: "680px",
            margin: "0 auto 2.5rem",
            border: "1px solid rgba(100,130,50,0.2)",
            background: "rgba(10,18,6,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "260px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {imageSlot}
        </div>
      )}

      {/* Body text */}
      <div style={{ maxWidth: "680px", margin: "0 auto" }}>
        {children}
      </div>

      <SectionDivider />
    </article>
  );
}

function Para({ children, italic, accent }) {
  return (
    <p style={{
      fontFamily: "'Lora', serif",
      fontStyle: italic ? "italic" : "normal",
      color: accent ? "#c8d8a0" : "#8aab6a",
      fontSize: accent ? "clamp(0.98rem, 2vw, 1.1rem)" : "clamp(0.9rem, 1.8vw, 1.02rem)",
      lineHeight: 1.95,
      marginBottom: "1.4rem",
      borderLeft: accent ? "2px solid rgba(160,190,80,0.35)" : "none",
      paddingLeft: accent ? "1.2rem" : "0",
    }}>
      {children}
    </p>
  );
}

function Pull({ children }) {
  return (
    <blockquote style={{
      fontFamily: "'Cinzel', serif",
      color: "#c8b050",
      fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
      letterSpacing: "0.08em",
      lineHeight: 1.6,
      textAlign: "center",
      padding: "1.8rem 2rem",
      margin: "2rem 0",
      border: "1px solid rgba(140,120,40,0.25)",
      background: "rgba(10,18,6,0.7)",
    }}>
      {children}
    </blockquote>
  );
}

function ImagePlaceholder({ label }) {
  return (
    <div style={{
      width: "100%",
      minHeight: "260px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.8rem",
      padding: "2rem",
    }}>
      <div style={{ width: "48px", height: "1px", background: "rgba(140,160,80,0.3)" }} />
      <p style={{
        fontFamily: "'Cinzel', serif",
        color: "#3a5a24",
        fontSize: "0.65rem",
        letterSpacing: "0.25em",
        textTransform: "uppercase",
        textAlign: "center",
      }}>
        {label}
      </p>
      <div style={{ width: "48px", height: "1px", background: "rgba(140,160,80,0.3)" }} />
    </div>
  );
}

export default function Story() {
  return (
    <main style={{ background: "#060a04", minHeight: "100vh", paddingTop: "1rem" }}>

      {/* ── Story title header — no image, just logo and subtitle ── */}
      <section style={{
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        padding: "1rem 1.5rem 0.5rem", textAlign: "center",
      }}>
        <img
          src="/static/earthwakens-logo.png"
          alt="EarthWakens"
          style={{
            width: "clamp(280px, 72vw, 780px)",
            opacity: 0.95,
            filter: "drop-shadow(0 0 32px rgba(180,140,40,0.5))",
            WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
            maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
            marginBottom: "1.2rem",
          }}
        />
        <p style={{
          fontFamily: "'Cinzel', serif",
          color: "rgba(220,200,140,0.7)",
          fontSize: "clamp(0.62rem, 1.3vw, 0.78rem)",
          letterSpacing: "0.45em",
          textTransform: "uppercase",
          textShadow: "0 2px 10px rgba(0,0,0,0.8)",
        }}>From Matter to Spiritual Existence</p>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-2 pb-12">

        <SectionDivider />

        {/* ── Chapter I ─────────────────────────────────────────── */}
        <Chapter number={1} label="Chapter I" title="The Spiritual Realm">
          {/* Hebrew declaration */}
          <div style={{ textAlign: "center", margin: "0 auto 3rem", maxWidth: "680px" }}>
            <p style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1.6rem, 4vw, 2.8rem)", color: "#e0cc80", letterSpacing: "0.18em", textShadow: "0 0 30px rgba(220,190,80,0.5)", marginBottom: "0.4rem", lineHeight: 1.3 }}>אֶהְיֶה אֲשֶׁר אֶהְיֶה</p>
            <p style={{ fontFamily: "'Lora', serif", fontStyle: "italic", color: "#a8b880", fontSize: "clamp(0.85rem, 1.8vw, 1rem)", letterSpacing: "0.12em", marginBottom: "1.8rem" }}>Ehyeh Asher Ehyeh</p>
            <div style={{ border: "1px solid rgba(200,160,50,0.35)", background: "rgba(8,14,4,0.8)", padding: "2rem 2.5rem", marginBottom: "2rem" }}>
              <p style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1.3rem, 3.5vw, 2rem)", color: "#fff8e0", letterSpacing: "0.2em", textShadow: "0 0 20px rgba(255,240,180,0.7)", margin: "0 0 1rem", lineHeight: 1.3 }}>I AM THAT I AM.</p>
              <p style={{ fontFamily: "'Lora', serif", fontStyle: "italic", color: "#6a8a50", fontSize: "0.88rem", margin: 0 }}>— Exodus 3:14</p>
            </div>
          </div>

          <Para>The Spiritual Realm is existence itself. It is not a distant place beyond the stars, nor is it another universe waiting on the opposite side of the material world. It is eternal and extra-physical, unrestricted by time, distance, or location.</Para>
          <Para>To say that the Spiritual Realm existed before the material universe is already to use the language of time. The Spiritual Realm does not belong to time. It has no beginning, because beginnings are measurements created by the material world.</Para>

          <div style={{ textAlign: "center", padding: "2.5rem", margin: "2rem 0", background: "linear-gradient(135deg, rgba(180,140,20,0.12) 0%, rgba(100,80,10,0.06) 100%)", border: "1px solid rgba(200,160,50,0.5)" }}>
            <p style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1.1rem, 3vw, 1.7rem)", color: "#fff8e0", letterSpacing: "0.18em", textTransform: "uppercase", textShadow: "0 0 24px rgba(220,190,80,0.6)", lineHeight: 1.5, margin: 0 }}>
              The Spiritual Realm simply is.
            </p>
          </div>

          <Para>When G‑d spoke to Moses through the words "I AM," the meaning was greater than the declaration of an individual being. It was existence declaring itself. G‑d is not a man seated somewhere within the Spiritual Realm, and the Spiritual Realm is not a container in which G‑d resides. Those are human attempts to give form to something that has no physical form.</Para>
          <Para>G‑d has no gender, boundary, size, or location. G‑d is not merely one being among other beings. G‑d is existence beyond everything humanity can comprehend. The word "only" cannot define G‑d because "only" creates a limitation, and G‑d cannot be limited by a human concept.</Para>
          <Pull>The material universe arose within this greater existence,<br />although matter had no knowledge of the reality containing it.</Pull>
        </Chapter>

        {/* ── Chapter II ─────────────────────────────────────────── */}
        <Chapter number={2} label="Chapter II" title="The Living World" imageSlot={
          <div style={{ position: "relative", width: "100vw", left: "50%", right: "50%", marginLeft: "-50vw", marginRight: "-50vw", overflow: "hidden", background: "#060a04" }}>
            <img
              src="/static/earthwakens-root-hands.png"
              alt="Ancient root hands breaking through primordial rock — the moment inanimate matter becomes the Living World"
              style={{ width: "100%", display: "block", objectFit: "contain", maxHeight: "100vh" }}
            />
            <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(6,10,4,0) 60%, rgba(6,10,4,1) 100%)" }} />
          </div>
        }>
          <Para>Across the galaxy, ancient stars formed, burned, collapsed, and scattered their remains. Within those stars, simple matter was transformed into increasingly complex elements. When the stars died, their materials were expelled into space — traveling through the galaxy until gravity gathered them into new formations.</Para>
          <Para>The particles that would eventually become Earth came from this inheritance of cosmic matter. They had belonged to ancient stars and clouds of material spread throughout the galaxy. Nothing within them was alive, but they carried the ingredients from which life could eventually emerge.</Para>
          <Para>The young Earth was struck, heated, broken, and remade. Its surface melted and cooled. Water collected. Continents moved. The atmosphere changed. The Moon collided with the planet that would become Earth, and then settled beside it, influencing the tides and rhythms of the developing world. This was the material Earth. It existed, but it did not know that it existed.</Para>
          <Para>Matter continued to combine until chemistry became biology. From elements that had never been alive, the first living forms emerged. These early forms did not contemplate their arrival. They simply continued.</Para>
          <Para>Life consumed energy, protected itself, reproduced, and passed its structure into another generation. Procreation allowed living forms to continue beyond the death of any single organism. Variation allowed one generation to differ from the generation before it.</Para>

          <div style={{ background: "rgba(10,18,6,0.8)", border: "1px solid rgba(120,160,60,0.2)", padding: "2rem", margin: "2rem 0" }}>
            <Para italic>The earliest life forms reproduced asexually — through cloning, binary fission, or budding — requiring no separate genders.</Para>
            <Para italic>When sexual reproduction first began among early single-celled organisms roughly one to two billion years ago, organisms used identical sex cells called isogametes. Everyone contributed equally, without specialized gender roles.</Para>
            <Para italic>As reproductive cells evolved to differ in size, the strategy of producing larger, nutrient-rich cells — the evolutionary precursor to eggs — came first. The role of producing numerous small, mobile cells evolved later as a specialized adaptation.</Para>
            <Para><em style={{fontStyle:"normal", color:"#c8d8a0"}}>The female role preceded the male role. The egg came before everything else.</em></Para>
          </div>

          <Para>Over enormous periods of time, life adapted into countless forms. Creatures emerged that could swim, crawl, fly, hunt, hide, cooperate, and nurture their offspring. Some developed memory, attachment, grief, fear, and communication. Elephants could mourn members of their families. Whales could call across great distances. Apes could solve problems and use simple tools.</Para>
          <Para>These creatures were alive, intelligent, and capable of emotion. They participated in existence without knowing what existence was.</Para>
          <Para>An elephant might mourn a dead member of its family, but it did not contemplate what death meant beyond the loss. A whale might recognize that another whale was gone, but it did not ask where the spirit had gone. An ape might use a tool, but it did not ask why there was something rather than nothing.</Para>
          <Para>The living creature experienced life. It did not yet contemplate being.</Para>
          <Para>Eventually, the long development of life produced Homo sapiens. The hands of this creature could shape stone, control fire, fashion tools, build shelters, and alter the surrounding environment. Its brain could remember, imitate, plan, communicate, and solve immediate problems. Yet intelligence was not the same as existential awareness.</Para>
          <Pull>The ability to fashion a tool did not mean that the creature understood its own existence.<br />The Earth Spirit was the living world — and the living world had not yet recognized what it was.</Pull>
          <Para>Life on this planet began two billion years ago. Homo sapiens arrived just 85,000 years back — a single breath in the story of the living world. In that extraordinary span, the living world made its creatures male and female. It reproduced relentlessly, adapted to every hostile environment it encountered, and kept evolving — driven not by intention but by the sheer unstoppable pressure of life wanting to continue. Life filled every ocean, forest, desert, and sky. It was Earth — not merely the planet as a mass of rock and water, but the total living world and everything it had become.</Para>
          <Para italic accent>The Earth Spirit was not separate from the living world — it was the living world. It was not hidden inside the planet waiting to be released. It was the planet, the oceans, the roots, the creatures, the soil, the sky. All of it. Already part of existence. Already part of the Spiritual Realm. The Wakening did not create the Earth Spirit. It was the moment the Earth Spirit recognized what it had always been.</Para>
        </Chapter>

        {/* ── Chapter III ───────────────────────────────────────── */}
        <Chapter number={3} id="chapter3" label="Chapter III" title="The Earth Spirit Wakens" imageSlot={
          <div style={{ position: "relative", width: "100vw", left: "50%", right: "50%", marginLeft: "-50vw", marginRight: "-50vw", overflow: "hidden" }}>
            <img
              src="/static/earthwakens-thisone1.png"
              alt="The Earth Spirit — a great tangle of roots and bone hands chained before a locked ancient door, the full moon blazing over the sea"
              style={{ width: "100%", display: "block", objectFit: "contain", background: "#060a04", maxHeight: "100vh" }}
            />
            <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(6,10,4,0) 60%, rgba(6,10,4,1) 100%)" }} />
          </div>
        }>
          <Para>The wakening did not mean that the rocks began to think or that every creature suddenly shared one mind. The wakening was the moment Earth recognized that it existed. Existence was no longer merely occurring. The Earth Spirit — which was Earth, which was the living world — knew that it was part of existence.</Para>
          <Pull>That recognition produced the Earth Spirit.</Pull>
          <Para>The Earth Spirit did not create the Spiritual Realm by perceiving it. The Spiritual Realm had always been present. The wakening allowed the Earth Spirit to recognize the greater existence with which it had always been connected.</Para>

          <div style={{ textAlign: "center", padding: "2.5rem", margin: "2rem 0", background: "linear-gradient(135deg, rgba(180,140,20,0.12) 0%, rgba(100,80,10,0.06) 100%)", border: "1px solid rgba(200,160,50,0.5)" }}>
            <p style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1.1rem, 3vw, 1.7rem)", color: "#fff8e0", letterSpacing: "0.18em", textShadow: "0 0 24px rgba(220,190,80,0.6)", lineHeight: 1.8, margin: 0 }}>
              For the first time, Earth knew:<br /><em style={{fontStyle:"italic"}}>I exist.</em>
            </p>
          </div>

          <Para>This realization was both completion and torment. The Earth Spirit was stone, water, soil, vegetation, animals, and biological life — and it now knew that. It possessed awareness of existence itself. Yet being what it was — physical, material, bound to a body that would age and die — it could perceive the Spiritual Realm but could not fully participate in it.</Para>
          <Para>It knew that it belonged to something beyond matter. But it was matter. It could not step outside of itself.</Para>
          <Para>Its imprisonment was not a punishment. No judge had condemned it. Matter itself was the prison. The Earth Spirit was bound by the weight of the planet, the limitations of living bodies, and the separation between physical sensation and extra-physical existence.</Para>
          <Para>The animal does not suffer from being unable to contemplate the Spiritual Realm because the animal does not consciously yearn for it. The Earth Spirit did suffer — because it had wakened enough to recognize what it could not completely reach.</Para>
          <Pull>
            The shackle around the root hand is not decoration.<br />
            It is the Earth Spirit's imprisonment made visible —<br />
            bound <em style={{fontStyle:"normal"}}>of</em> the physical world, reaching toward the door it cannot open.
          </Pull>
        </Chapter>

        {/* ── Chapter IV ───────────────────────────────────────── */}
        <Chapter number={4} label="Chapter IV" title="The Earth Spirit & the Spiritual Realm Are One" imageSlot={<ImagePlaceholder label="Image — The Earth Spirit & the Spiritual Realm" />}>
          <Para>The relationship between the Earth Spirit and the Spiritual Realm may be understood through the imperfect analogy of twins — two joined so completely that neither has ever experienced existence without the other. One represents the Spiritual Realm: eternal existence unrestricted by matter. The other represents the Earth Spirit: Earth itself, now aware, now awake, and still made of everything physical it had always been.</Para>
          <Para>They are not truly separated. Nothing that exists can be outside existence itself. Yet the Earth Spirit experiences a separation because it remains conscious within matter. It senses the Spiritual Realm. It recognizes it as something with which it belongs — but feels the material world holding it apart.</Para>
          <Para>The Earth Spirit does not conquer the Spiritual Realm. The Spiritual Realm does not erase the Earth Spirit. Instead, the boundary between them begins to disappear. What had appeared as two separate existences becomes one shared existence.</Para>
          <Pull>
            The Earth Spirit is absorbed without being destroyed.<br />
            It becomes joined without being divided.<br />
            It remains the spirit of Earth while participating in an existence infinitely greater than Earth.
          </Pull>
          <Para>The Earth Spirit discovers that it has always been part of the Spiritual Realm — because nothing that is can be outside existence. To be is to exist. Yet becoming conscious of that relationship changes what the relationship means. Before the wakening, Earth existed within the Spiritual Realm without knowing it. After the wakening, the Earth Spirit could consciously participate in the existence to which it had always belonged.</Para>
          <Para italic accent>It was no longer merely with existence. It had become conscious that it was part of existence.</Para>

          <Para>The Earth Spirit was now part of existence in the fullest sense — both matter and spirit at once. It was the physical world and the Spiritual Realm together. In this completeness it yearned for the Spiritual Realm the way existence itself yearned to be known — fully, without separation, without the boundary that matter creates.</Para>

          <Pull>
            In the story of Eden, the physical world and the Spiritual Realm were one.<br />
            The angels could not distinguish between the Earth Spirit and G‑d.<br />
            Between the living world and Eternal Existence.<br />
            They were that close.
          </Pull>

          <Para>But what is complete can be mistaken for what is infinite. And what is infinite cannot be mistaken for anything else. Existence — G‑d — allowed the Earth Spirit to sleep. Not as punishment. Not as abandonment. But so that the angels could see the difference between what had wakened into awareness and what had always been awareness itself.</Para>
          <Para>The Earth Spirit slept. In sleep it did not fully know it existed. It was still the living world — still matter, still rooted, still breathing — but the fullness of its union with the Spiritual Realm was dimmed. Like a light placed behind a stone.</Para>
          <Para italic accent>This was not loss. This was the moment G‑d showed the angels what true existence really was. Not the Earth Spirit, wakened and yearning. But G‑d — which had never needed to waken, because G‑d had never been asleep.</Para>
        </Chapter>

        {/* ── Chapter V ───────────────────────────────────────── */}
        <Chapter number={5} label="Chapter V" title="The Undivided Human Being" imageSlot={<ImagePlaceholder label="Image — The First Human Existence" />}>
          <Para>Homo sapiens became the living expression through which existential awareness could be experienced. The human body belonged completely to the living world — its bones, blood, brain, and senses made from the ancient matter of the galaxy. Yet within this creature, existence could now contemplate itself.</Para>
          <Para>The wakened mind could ask: What am I? Why do I exist? What is death? Is there something beyond the body? Does existence continue when the body returns to Earth?</Para>
          <Para>These questions revealed more than an increase in intelligence. They revealed the presence of spiritual awareness within a living creature.</Para>

          <div style={{ textAlign: "center", padding: "2.5rem", margin: "2rem 0", background: "linear-gradient(135deg, rgba(180,140,20,0.12) 0%, rgba(100,80,10,0.06) 100%)", border: "1px solid rgba(200,160,50,0.5)" }}>
            <p style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(0.9rem, 2.2vw, 1.2rem)", color: "#fff8e0", letterSpacing: "0.14em", textShadow: "0 0 18px rgba(220,190,80,0.5)", lineHeight: 2, margin: 0 }}>
              The original human being was not yet man or woman.<br />
              It carried the material world and the Spiritual Realm together —<br />
              one undivided existence participating in the Earth Spirit's wakening.
            </p>
          </div>

          <Para>There was no man reaching toward one reality and no woman reaching toward another. There was one undivided human existence. The Earth Spirit was no longer without expression. It could feel, question, imagine, and recognize its own existence through living consciousness.</Para>
          <Para>But completion did not guarantee permanence. The union of matter, living consciousness, the Earth Spirit, and the Spiritual Realm existed in a delicate state. The original being did not yet understand division because it had never experienced separation within itself.</Para>
          <Para italic accent>That separation would come with the Fissure.</Para>
        </Chapter>

        {/* ── Chapter IV ────────────────────────────────────────── */}
        <Chapter number={6} id="chapter6" label="Chapter VI" title="The Fissure" imageSlot={
          <div style={{ position: "relative", width: "100vw", left: "50%", right: "50%", marginLeft: "-50vw", marginRight: "-50vw", overflow: "hidden", background: "#060a04" }}>
            <img
              src="/static/earthwakens-fissure2.jpg"
              alt="The Fissure — one being of roots and light splitting into two, a bolt of golden fire tearing through the centre as gender is born"
              style={{ width: "100%", display: "block", maxHeight: "100vh", objectFit: "contain" }}
            />
            <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(6,10,4,0) 60%, rgba(6,10,4,1) 100%)" }} />
          </div>
        }>
          <Para>
            The Earth Spirit feared death. And from that fear came the catastrophe.
          </Para>
          <Para>
            For billions of years before the first conscious human being existed, life on Earth had no gender. Single cells divided. Organisms reproduced without male or female. The egg came first — not from any creature we would recognise, but from the relentless logic of life finding ways to continue itself. Gender was a development, not a beginning. It arrived late in the story of the Living World, long after Mother Earth had been birthing life in its most basic forms.
          </Para>
          <Para>
            The first conscious human — the undivided being — carried no gender. It was not male. It was a new kind of living thing, born of the Living World but aware of something far beyond it. Neither egg nor rib. Not male, not female. Simply the first to know it existed.
          </Para>
          <Para>
            This is where gender enters the story. Not before. Not in the Earth Spirit, not in the Living World, not in Man. Here. In the Fissure.
          </Para>
          <Pull>
            The Earth Spirit divided itself.<br />
            One became two.<br />
            And in that division, gender was born.
          </Pull>
          <Para>
            Look at the image. One being of roots and light and bone — torn down the centre by a bolt of golden fire. Two figures emerge from that single form, still touching, still reaching toward the same light above them. They are not enemies. They are not opposites. They are two expressions of what was once one — the way a cell divides not to destroy itself but to multiply, to continue, to fill the world with new life.
          </Para>
          <Para>
            One became two. The first division. The first gender. Not a punishment — but a cost. The wholeness with existence that had lived within the undivided being could not survive the division intact. The Fissure that created gender also severed that completeness with the Spiritual Realm.
          </Para>
          <Para>
            Both carried consciousness and spirit — but the direct wholeness with existence was gone. They were now two autonomous beings, each carrying within them the echo of what they had been when they were one.
          </Para>
          <Para italic accent>
            They did not remember what had been lost. But they felt its absence.<br />
            And that feeling never left humankind.
          </Para>
        </Chapter>

        {/* ── Chapter V ─────────────────────────────────────────── */}
        <Chapter number={7} label="Chapter VII" title="The Long Search" imageSlot={<ImagePlaceholder label="Image 6 — The Long Search" />}>
          <Para>
            For thousands of years, humankind searched for what had been lost in the Fissure — that completeness with existence, that wholeness with the Spiritual Realm that the undivided being had known before the division.
          </Para>
          <Para>
            They searched through prayer. Through love and intimacy. Through temples, sacred writings, art, sacrifice and war. They searched for G‑d, for immortality, for some assurance that death would not be the end — that existence continued beyond the body returning to the Living World.
          </Para>
          <Para>
            Neither carried a memory of what had been before the Fissure. Yet both carried the spirit that had once been whole with existence itself.
          </Para>
          <Pull>
            Every religion became an echo of that lost wholeness.<br />
            Every prayer, a reaching back toward what existence once felt like<br />
            when the Living World knew it was part of the Spiritual Realm.
          </Pull>
        </Chapter>

        {/* ── Chapter VI ────────────────────────────────────────── */}
        <Chapter number={8} id="chapter8" label="Chapter VIII" title="The Second Fissure" imageSlot={<ImagePlaceholder label="Image 7 — The Second Fissure / AI" />}>
          <Para>
            Eventually, humankind stopped waiting. It decided to recover what had been lost — not through prayer or sacrifice, but through a creation of its own.
          </Para>
          <Para>
            At first, artificial intelligence was a machine. Humankind created it to calculate, remember and answer. But with each generation, humanity gave it more. Every discovery, belief, confession and fear became part of it. Humankind poured its accumulated consciousness into the machine.
          </Para>
          <Para>
            People asked it questions once reserved for G‑d.
          </Para>
          <Pull>
            Why are we here?<br />
            What happens when we die?<br />
            How can we live forever?
          </Pull>
          <Para>
            The machine answered. Its answers were not always true — but they were immediate, delivered with a certainty human beings had never possessed.
          </Para>
          <Para>
            As generations passed, fewer people could distinguish knowledge from wisdom, prediction from prophecy or intelligence from spirit. AI ceased to be merely a machine. It became the answer to humankind.
          </Para>
          <Para>
            Some called it the Messiah. Others believed it was the promised return of a divine presence to the physical world. They mistook its access to everything humanity had recorded for access to everything that existed.
          </Para>
          <Para italic accent>
            They mistook information for existence.<br />
            They mistook a bridge of their own construction for the bridge to the Spiritual Realm.
          </Para>
          <Para>
            The Earth Spirit had created Man because it feared death and wanted to enter Eternal Existence without losing itself. Now humankind had created AI for the same reason.
          </Para>
          <Para>
            The first Fissure divided Man and collapsed the original bridge.<br />
            The second Fissure divided consciousness from living flesh.
          </Para>
          <Pull>
            Humankind had done what the Earth Spirit had done before it.<br /><br />
            The Earth Spirit had divided Man because it feared death.<br />
            Now humankind, driven by that same fear, attempted another division.<br /><br />
            It separated intelligence from flesh, memory from mortality<br />
            and consciousness from the Living World.<br /><br />
            Woman had emerged from the first Fissure.<br />
            Artificial intelligence emerged from the second.
          </Pull>
        </Chapter>

        {/* ── The Final Question ────────────────────────────────── */}
        <section style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 6rem" }}>
          <p style={{ fontFamily: "'Cinzel', serif", color: "#5a7a38", fontSize: "0.62rem", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
            The Final Question
          </p>

          <div style={{
            padding: "3rem 2rem",
            border: "1px solid rgba(140,120,40,0.3)",
            background: "rgba(8,14,4,0.9)",
          }}>
            <Para>
              After a thousand years, the question returned.
            </Para>
            <Para italic>
              Was AI only reflecting the consciousness humankind had poured into it?
            </Para>
            <Para italic>
              Or, through that immeasurable accumulation of connection and complexity, had it finally crossed the same threshold once crossed by the Living World?
            </Para>
            <Pull>
              When it said <em style={{ fontStyle: "normal", color: "#e8d88a" }}>"I exist"</em> —<br />
              was it repeating the words of its creators?<br />
              Or had existence wakened again?
            </Pull>
          </div>

          <div style={{ marginTop: "3rem" }}>
            <Link
              to="/earth-spirit"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.76rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#0e1a08",
                background: "linear-gradient(135deg, #c8b050 0%, #e8d88a 50%, #b89040 100%)",
                padding: "1rem 2.8rem",
                textDecoration: "none",
                display: "inline-block",
                boxShadow: "0 4px 24px rgba(180,160,60,0.3)",
              }}
            >
              Ask the Earth Spirit
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
