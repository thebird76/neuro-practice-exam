// Question bank for Practice Exam 1.
//
// Each question has:
//   id          unique string (used to save answers)
//   topic       one of the names in `topics` (drives the results breakdown)
//   source      "Curriculum" or "Step 1" (Step 1 = high-yield extras beyond the weekly quizzes)
//   stem        array of paragraphs for the vignette
//   question    the lead-in question, shown in bold under the stem
//   image       optional { src, alt, caption }
//   choices     array of { text, why }; `why` explains that choice in the review
//   answer      letter of the correct choice
//   explanation the main teaching point, shown first in the review
//   takeaway    one-line rule to remember

window.EXAM = {
  id: "neuro-summative-practice-1",
  title: "Neuro Practice Exam 1",
  subtitle: "30 questions built from your weekly quizzes and review slides, plus a few Step 1 favorites.",
  topics: [
    "Brainstem & cranial nerves",
    "Vestibular & coma exam",
    "Stroke & vascular",
    "Spinal cord & motor tracts",
    "Cortex, vision & behavior",
    "Neurophysiology & pharmacology",
    "Basal ganglia & cerebellum",
    "Sleep",
    "Clinical neurology"
  ],
  questions: [
    {
      id: "q01",
      topic: "Cortex, vision & behavior",
      source: "Curriculum",
      stem: [
        "A 71-year-old right-handed man is brought to the clinic by his daughter, who says he has been “bumping into things” since a stroke 3 weeks ago. She notices that he shaves only the right side of his face and combs only the right side of his hair. When asked to bisect a horizontal line, he marks it well to the right of center, and when asked to draw a clock, he crowds all 12 numbers onto the right half.",
        "Strength, visual acuity, and primary sensation are intact. Visual fields are full to confrontation when each side is tested separately."
      ],
      question: "A lesion in which of the following locations best explains his findings?",
      choices: [
        { text: "Left angular gyrus", why: "The dominant (left) angular gyrus causes Gerstmann syndrome: agraphia, acalculia, finger agnosia, and left-right confusion. It does not cause neglect." },
        { text: "Right primary visual cortex", why: "A right V1 lesion causes a left homonymous hemianopia. His fields are full, and patients with a field cut are aware of it and turn their head to compensate. Neglect patients ignore the side even when they can see it." },
        { text: "Left dorsolateral prefrontal cortex", why: "The dorsolateral prefrontal cortex handles executive function. Damage causes poor planning, perseveration, and poor working memory, not inattention to one side of space." },
        { text: "Right precentral gyrus", why: "The right primary motor cortex would cause left-sided upper motor neuron weakness. His strength is normal." },
        { text: "Right posterior parietal cortex", why: "Correct. The nondominant (right) posterior parietal cortex directs attention to both sides of space. Damage leaves the left side ignored even though sensation and vision are intact." }
      ],
      answer: "E",
      explanation: "This is left hemineglect. The right parietal lobe attends to both hemifields, while the left parietal lobe attends mostly to the right. That's why neglect is far more common and severe after right (nondominant) parietal damage.",
      takeaway: "Hemineglect = nondominant (usually right) posterior parietal lobe. Neglect is not a hemianopia: the fields can be full."
    },
    {
      id: "q02",
      topic: "Brainstem & cranial nerves",
      source: "Curriculum",
      stem: [
        "A 34-year-old woman notices on waking that the right side of her face “feels heavy.” Examination shows that she cannot wrinkle her right forehead, close her right eye tightly, or raise the right corner of her mouth. Ordinary sounds seem uncomfortably loud in her right ear, and taste is decreased on the right anterior two-thirds of the tongue.",
        "Schirmer testing shows normal, symmetric tear production. Facial sensation, hearing acuity, and the rest of the neurologic examination are normal."
      ],
      question: "A lesion at which site best explains all of her findings?",
      choices: [
        { text: "Left primary motor cortex (face area)", why: "An upper motor neuron lesion weakens only the contralateral lower face; the forehead is spared because it gets input from both hemispheres. Her forehead is weak, so this is a lower motor neuron (nerve) lesion." },
        { text: "Right facial nerve within the internal acoustic meatus", why: "A lesion this proximal would also catch the greater petrosal nerve (decreased tearing) and usually CN VIII (hearing loss). Her tears and hearing acuity are normal." },
        { text: "Right facial nerve at the stylomastoid foramen", why: "By the stylomastoid foramen, the branches to the stapedius and the chorda tympani have already left. A lesion here causes facial weakness only, with no hyperacusis or taste loss." },
        { text: "Right facial nerve between the geniculate ganglion and the branch to the stapedius", why: "Correct. Below the geniculate ganglion, tearing (greater petrosal nerve) is spared. Above the stapedius and chorda tympani branches, the lesion still causes hyperacusis and taste loss, along with weakness of the whole half of the face." },
        { text: "Right facial motor nucleus in the pons", why: "The motor nucleus supplies the facial muscles and stapedius, but taste travels in separate fibers to the solitary nucleus. A nuclear lesion would not explain the taste loss, and it usually also affects the nearby abducens nucleus." }
      ],
      answer: "D",
      explanation: "Localize CN VII by which branches are affected. In order from proximal to distal: the geniculate ganglion gives off the greater petrosal nerve (lacrimation), then the nerve to the stapedius (dampens sound), then the chorda tympani (taste to the anterior 2/3, submandibular and sublingual saliva), and finally the nerve exits the stylomastoid foramen to the face. Lost hyperacusis protection and taste with spared tearing puts the lesion between the geniculate ganglion and the stapedius branch.",
      takeaway: "Walk CN VII proximal → distal: tears → stapedius → taste → face. The lesion sits just above the most distal function that's lost."
    },
    {
      id: "q03",
      topic: "Neurophysiology & pharmacology",
      source: "Curriculum",
      stem: [
        "A 46-year-old woman develops numbness around her mouth and tingling in her fingertips the day after a total thyroidectomy. Tapping just anterior to her ear causes twitching of the ipsilateral facial muscles, and inflating a blood pressure cuff on her arm produces carpal spasm. An ECG shows a prolonged QT interval."
      ],
      question: "Which of the following best explains the increased excitability of her nerves?",
      choices: [
        { text: "More Ca²⁺ enters presynaptic terminals, increasing neurotransmitter release", why: "Low extracellular Ca²⁺ actually reduces Ca²⁺ entry into terminals. The hyperexcitability comes from the axon membrane, not from more transmitter release." },
        { text: "Fewer extracellular Ca²⁺ ions screen voltage-gated Na⁺ channels, so less depolarization is needed to open them", why: "Correct. Extracellular Ca²⁺ normally stabilizes Na⁺ channel gating. With less Ca²⁺, the activation threshold moves closer to the resting potential, so axons fire spontaneously (tetany, paresthesias)." },
        { text: "The resting membrane potential hyperpolarizes toward the K⁺ equilibrium potential", why: "Hyperpolarization would make neurons less excitable. In hypocalcemia the resting potential barely changes; the threshold is what shifts." },
        { text: "Mg²⁺ block of NMDA receptors at the neuromuscular junction is lost", why: "The neuromuscular junction uses nicotinic ACh receptors, not NMDA receptors. Mg²⁺ block of NMDA receptors is a feature of central glutamate synapses." },
        { text: "Voltage-gated Na⁺ channels remain inactivated", why: "Na⁺ channel inactivation reduces excitability. That's how succinylcholine and severe hyperkalemia cause weakness." }
      ],
      answer: "B",
      explanation: "This is hypocalcemia from inadvertent removal of or damage to the parathyroid glands (Chvostek and Trousseau signs, prolonged QT). Low Ca²⁺ means less screening of surface charge near Na⁺ channels, so they open with less depolarization and nerves become hyperexcitable.",
      takeaway: "Low Ca²⁺ → hyperexcitable (tetany, Chvostek, Trousseau, seizures, long QT). High Ca²⁺ → hypoexcitable (weakness, hyporeflexia, confusion, short QT)."
    },
    {
      id: "q04",
      topic: "Stroke & vascular",
      source: "Curriculum",
      stem: [
        "A 66-year-old man with hypertension and diabetes develops sudden weakness of his right arm and leg. On examination, the right limbs are weak, with increased tone and an extensor plantar response. Vibration and joint position sense are lost over the right side of the body, but pain and temperature sensation are intact. Facial strength is symmetric. When he protrudes his tongue, it deviates to the left."
      ],
      question: "Occlusion of which artery most likely caused this stroke?",
      choices: [
        { text: "Left posterior inferior cerebellar artery", why: "PICA causes lateral medullary (Wallenberg) syndrome: ipsilateral face plus contralateral body pain and temperature loss, dysphagia, hoarseness, Horner syndrome, and ataxia. It does not cause hemiparesis." },
        { text: "Right anterior inferior cerebellar artery", why: "AICA causes lateral pontine syndrome: ipsilateral lower motor neuron facial palsy, deafness, and vertigo. It doesn't fit, and it's also the wrong side." },
        { text: "Paramedian branches of the basilar artery", why: "Medial pontine infarcts cause contralateral hemiparesis plus an ipsilateral CN VI palsy (the eye can't abduct), not tongue deviation." },
        { text: "Left anterior spinal artery (paramedian branches of the vertebral artery)", why: "Correct. This is left medial medullary syndrome: left pyramid (right hemiparesis), left medial lemniscus (right vibration and proprioception loss), and left CN XII (tongue deviates left, toward the lesion)." },
        { text: "Left posterior cerebral artery", why: "PCA occlusion causes a contralateral homonymous hemianopia with macular sparing. Its midbrain branches cause Weber syndrome (CN III palsy), not a CN XII palsy." }
      ],
      answer: "D",
      explanation: "Brainstem strokes give ipsilateral cranial nerve signs and contralateral body signs. CN XII deviation to the left puts the lesion in the left medulla. Hemiparesis with dorsal column loss but spared pain and temperature means the medial structures are involved: pyramid, medial lemniscus, and hypoglossal nucleus or fibers.",
      takeaway: "Medial medullary syndrome: contralateral hemiparesis + contralateral dorsal column loss + tongue deviating TOWARD the lesion."
    },
    {
      id: "q05",
      topic: "Spinal cord & motor tracts",
      source: "Curriculum",
      stem: [
        "A 24-year-old man is stabbed in the back. Imaging shows a complete hemisection of the RIGHT side of the spinal cord at the C8 level."
      ],
      question: "Six months later, which of the following findings is most likely on examination?",
      choices: [
        { text: "Loss of pain and temperature sensation in the right leg", why: "Spinothalamic fibers cross within 1–2 segments of entering the cord, so pain and temperature loss is contralateral (left) below the lesion." },
        { text: "Loss of vibration sense in the left leg", why: "The dorsal columns stay ipsilateral until the medulla, so vibration loss is in the right leg." },
        { text: "Spastic paralysis of the left leg", why: "The lateral corticospinal tract has already crossed at the cervicomedullary junction, so the spastic weakness is in the right leg." },
        { text: "Decreased reflexes at the right knee", why: "Below the lesion, the right leg has upper motor neuron signs: hyperreflexia, spasticity, and a Babinski sign." },
        { text: "Flaccid weakness and atrophy of the right hand intrinsic muscles", why: "Correct. The hemisection destroys right ventral horn motor neurons at C8, giving lower motor neuron signs at that level. C8–T1 supplies the hand intrinsics." }
      ],
      answer: "E",
      explanation: "Brown-Séquard syndrome has three parts: (1) at the level of the lesion, ipsilateral lower motor neuron signs (flaccid weakness, atrophy, areflexia) from loss of ventral horn cells; (2) below the lesion, ipsilateral upper motor neuron signs and dorsal column loss; (3) contralateral pain and temperature loss starting 1–2 segments below.",
      takeaway: "Hemisection: LMN signs AT the level; ipsilateral UMN and dorsal column loss BELOW; contralateral pain and temperature loss."
    },
    {
      id: "q06",
      topic: "Cortex, vision & behavior",
      source: "Step 1",
      stem: [
        "A 58-year-old woman is evaluated for 2 months of headaches. Automated perimetry results are shown below. Shaded areas indicate vision loss, and the fields are drawn as the patient sees them."
      ],
      image: {
        src: "images/visual-fields.svg",
        alt: "Visual field charts for the left and right eye. In both eyes, the upper right quadrant is shaded, indicating vision loss.",
        caption: "Visual fields (patient's view)"
      },
      question: "MRI is most likely to show a mass in which location?",
      choices: [
        { text: "Optic chiasm", why: "A chiasmal lesion (pituitary adenoma, craniopharyngioma) compresses the crossing nasal fibers and causes a bitemporal hemianopia: the outer half of each eye's field." },
        { text: "Right optic tract", why: "A right optic tract lesion causes a LEFT homonymous hemianopia, a full half-field and often incongruous between the eyes." },
        { text: "Left temporal lobe", why: "Correct. Meyer's loop carries the inferior retinal fibers (superior visual field) through the temporal lobe. A left-sided lesion causes a right superior quadrantanopia: “pie in the sky.”" },
        { text: "Left parietal lobe", why: "The parietal (dorsal) optic radiations carry the superior retinal fibers. A left parietal lesion causes a right INFERIOR quadrantanopia: “pie on the floor.”" },
        { text: "Right occipital lobe", why: "A right occipital lesion causes a left homonymous hemianopia, often with macular sparing in a PCA stroke." }
      ],
      answer: "C",
      explanation: "The same quadrant is missing in both eyes (homonymous), so the lesion is behind the chiasm on the opposite side: left. Superior field loss means the inferior retinal fibers are affected, and those loop forward through the temporal lobe (Meyer's loop).",
      takeaway: "Temporal (Meyer's loop) = superior quadrant, “pie in the sky.” Parietal = inferior quadrant, “pie on the floor.” Every lesion behind the chiasm gives a contralateral homonymous defect."
    },
    {
      id: "q07",
      topic: "Neurophysiology & pharmacology",
      source: "Curriculum",
      stem: [
        "A 30-year-old man undergoing an emergency appendectomy receives rapid-sequence intubation. Within seconds of the paralytic being given, brief, widespread muscle twitches ripple across his chest and limbs. These are followed by flaccid paralysis that lasts several minutes."
      ],
      question: "Which of the following best explains how this drug produces paralysis?",
      choices: [
        { text: "Competitive blockade of nicotinic receptors at the motor end plate", why: "This is how nondepolarizing blockers (rocuronium, vecuronium) work. They cause paralysis without the initial fasciculations and are reversed by neostigmine or sugammadex." },
        { text: "Inhibition of acetylcholinesterase in the synaptic cleft", why: "AChE inhibitors (neostigmine, organophosphates) raise ACh levels. Organophosphate poisoning causes a cholinergic crisis, not a rapid twitch-then-paralysis induction." },
        { text: "Sustained end-plate depolarization that keeps nearby voltage-gated Na⁺ channels inactivated", why: "Correct. Succinylcholine is a nicotinic agonist that AChE can't break down quickly. The first depolarization fires the muscle (fasciculations). Then the persistently depolarized end plate holds nearby Na⁺ channels inactivated, so no new action potentials can start." },
        { text: "Cleavage of SNARE proteins needed for acetylcholine release", why: "That's botulinum toxin. It causes descending flaccid paralysis over hours to days, not seconds." },
        { text: "Blockade of ryanodine receptors in the sarcoplasmic reticulum", why: "That's dantrolene, the treatment for malignant hyperthermia. It relaxes muscle but doesn't produce fasciculations followed by paralysis." }
      ],
      answer: "C",
      explanation: "Succinylcholine is a depolarizing blocker. Twitches first, then paralysis (phase I block). Na⁺ channels must return to the resting potential to reset from inactivation, and the persistently depolarized end plate never lets that happen.",
      takeaway: "Succinylcholine: fasciculations → paralysis. Dangers: hyperkalemia (burns, crush injury, denervation, immobilization) and malignant hyperthermia."
    },
    {
      id: "q08",
      topic: "Brainstem & cranial nerves",
      source: "Curriculum",
      stem: [
        "A 29-year-old woman has had 1 week of double vision when looking to the side. On attempted leftward gaze, her right eye does not move past the midline, while her left eye abducts fully with horizontal nystagmus. Rightward gaze is normal. When she focuses on a pen brought toward her nose, both eyes adduct normally. Pupils are equal and reactive."
      ],
      question: "A lesion in which structure best explains these findings?",
      choices: [
        { text: "Left medial longitudinal fasciculus", why: "A left MLF lesion would stop the LEFT eye from adducting on RIGHT gaze. An INO is named after the eye that fails to adduct." },
        { text: "Right medial longitudinal fasciculus", why: "Correct. On left gaze, the left abducens nucleus sends signals up the right MLF to the right CN III medial rectus subnucleus. With the right MLF cut, the right eye can't adduct, and the abducting left eye shows nystagmus." },
        { text: "Right oculomotor nerve", why: "A CN III palsy would block adduction during convergence too, and would usually cause ptosis, a down-and-out eye, and possibly a dilated pupil. Normal convergence shows that CN III and the medial rectus work." },
        { text: "Left abducens nucleus", why: "The abducens nucleus contains motor neurons for CN VI and interneurons that send fibers into the MLF. A lesion causes a horizontal gaze palsy: NEITHER eye can look left." },
        { text: "Left paramedian pontine reticular formation", why: "The left PPRF drives conjugate gaze to the left. A lesion causes a leftward gaze palsy of both eyes, not an isolated adduction failure." }
      ],
      answer: "B",
      explanation: "Internuclear ophthalmoplegia: the eye on the side of the MLF lesion can't adduct during conjugate gaze to the opposite side, and the opposite (abducting) eye shows nystagmus. Convergence is preserved because it doesn't depend on the MLF.",
      takeaway: "INO = MLF lesion: the ipsilateral eye can't adduct on contralateral gaze, convergence is spared. Young adult → think MS. Older adult → think stroke."
    },
    {
      id: "q09",
      topic: "Clinical neurology",
      source: "Curriculum",
      stem: [
        "A 34-year-old man has had 3 weeks of excruciating, stabbing pain behind his right eye. Attacks occur once or twice every night, usually waking him about an hour after he falls asleep, and last 45 minutes. During attacks he paces the room, and his right eye tears and reddens, with a drooping eyelid and a running right nostril. He had a similar 6-week period 2 years ago. Breathing 100% oxygen stops his attacks."
      ],
      question: "Which of the following is the most appropriate preventive medication?",
      choices: [
        { text: "Propranolol", why: "Propranolol is a first-line preventive for migraine, but it isn't effective for cluster headache." },
        { text: "Indomethacin", why: "Indomethacin works dramatically for paroxysmal hemicrania, which has similar autonomic features but shorter (2–30 min), more frequent attacks and occurs more often in women." },
        { text: "Carbamazepine", why: "Carbamazepine treats trigeminal neuralgia: seconds-long electric shocks triggered by touch or chewing, without autonomic features." },
        { text: "Amitriptyline", why: "Amitriptyline is used to prevent tension-type headache and migraine, not cluster headache." },
        { text: "Verapamil", why: "Correct. Verapamil is the first-line preventive for cluster headache. Oxygen and sumatriptan are for stopping an attack." }
      ],
      answer: "E",
      explanation: "This is cluster headache: young man, unilateral periorbital pain lasting 15–180 minutes, attacks at the same time each night, restlessness, and ipsilateral autonomic features (tearing, red eye, rhinorrhea, partial Horner). Acute treatment is 100% O₂ or sumatriptan. Prevention is verapamil, often with a short steroid course as a bridge.",
      takeaway: "Cluster headache: acute = 100% O₂ or sumatriptan; prevention = verapamil."
    },
    {
      id: "q10",
      topic: "Vestibular & coma exam",
      source: "Curriculum",
      stem: [
        "A 45-year-old woman wakes up with severe, constant vertigo, nausea, and vomiting 1 week after a cold. She has no hearing loss or tinnitus. Examination shows spontaneous horizontal nystagmus with the fast phase beating to the LEFT, which doesn't change direction with gaze.",
        "When her head is rapidly turned to the right, her eyes move with her head and then make a corrective saccade back to the target; rapid turns to the left are normal. When standing, she tends to fall toward the right."
      ],
      question: "Which of the following is the most likely diagnosis?",
      choices: [
        { text: "Right vestibular neuritis", why: "Correct. A weak right vestibular input lets the eyes drift slowly to the right, with corrective fast phases to the left. The head impulse test fails when turning toward the weak side, and she falls toward it. Hearing is spared because only the vestibular nerve is inflamed." },
        { text: "Left vestibular neuritis", why: "With a unilateral loss, the fast phase beats AWAY from the lesion. A leftward fast phase and an abnormal rightward head impulse point to the right side." },
        { text: "Right labyrinthitis", why: "Labyrinthitis involves the cochlea too, so vertigo comes with hearing loss and often tinnitus. Her hearing is normal." },
        { text: "Benign paroxysmal positional vertigo", why: "BPPV causes brief episodes (under a minute) triggered by changes in head position, not days of constant vertigo with spontaneous nystagmus." },
        { text: "Left cerebellar hemisphere infarction", why: "Central causes usually have a NORMAL head impulse test, nystagmus that changes direction with gaze, or a skew deviation. An abnormal head impulse is reassuring for a peripheral cause." }
      ],
      answer: "A",
      explanation: "In vestibular neuritis the healthy left side is unopposed, so the eyes drift (slow phase) toward the weak right side and reset (fast phase) to the left. The head impulse test checks the vestibulo-ocular reflex on each side, so it fails when the head turns toward the lesion. Over days to weeks, the brainstem and flocculonodular lobe recalibrate and the nystagmus fades.",
      takeaway: "Unilateral vestibular loss: slow phase TOWARD the lesion, fast phase AWAY; falls toward the lesion; abnormal head impulse toward the lesion."
    },
    {
      id: "q11",
      topic: "Basal ganglia & cerebellum",
      source: "Curriculum",
      stem: [
        "A 38-year-old man has developed fidgety, dance-like movements of his face and fingers, irritability, and difficulty managing his finances. His father died at age 52 after a similar illness. Genetic testing shows an expanded CAG repeat in the HTT gene.",
        "Early in this disease, the striatal neurons that express D2 receptors and project to the external globus pallidus are the first to degenerate."
      ],
      question: "Which change in basal ganglia activity best explains his abnormal movements?",
      choices: [
        { text: "Internal globus pallidus neurons fire more", why: "More GPi firing inhibits the thalamus and reduces movement. That's the pattern in Parkinson disease, the opposite of chorea." },
        { text: "Subthalamic nucleus neurons fire less", why: "Correct. Losing the striatal neurons that inhibit the GPe frees the GPe to inhibit the STN more. The STN then excites the GPi less, the GPi inhibits the thalamus less, and extra movements break through." },
        { text: "External globus pallidus neurons fire less", why: "The GPe normally receives inhibition from these striatal neurons. When they die, the GPe fires MORE, not less." },
        { text: "VA/VL thalamic neurons fire less", why: "The thalamus is disinhibited, so it fires MORE and drives excess cortical motor activity (chorea)." },
        { text: "Substantia nigra pars compacta neurons release less dopamine", why: "Loss of nigral dopamine is the primary lesion in Parkinson disease. Huntington disease is primarily a striatal degeneration." }
      ],
      answer: "B",
      explanation: "Follow the indirect pathway: striatum ⊣ GPe ⊣ STN → GPi ⊣ thalamus. Remove the first inhibitory link and every step after it flips: GPe ↑, STN ↓, GPi ↓, thalamus ↑ → hyperkinesia. Destroying the STN directly (a lacunar stroke) skips to the same endpoint and causes contralateral hemiballismus.",
      takeaway: "Hyperkinetic disorders (chorea, hemiballismus, tardive dyskinesia) share one endpoint: less STN → GPi drive and a disinhibited thalamus. Parkinson disease is the reverse: GPi ↑, thalamus ↓."
    },
    {
      id: "q12",
      topic: "Cortex, vision & behavior",
      source: "Curriculum",
      stem: [
        "A 23-year-old man is seen 4 months after a high-speed motor vehicle collision in which he struck his forehead on the dashboard. His mother reports that her previously reserved son now makes crude sexual remarks to strangers, laughs at inappropriate times, has spent his savings on impulse purchases, and was fired for yelling at his manager.",
        "He scores 29/30 on a cognitive screening test, and his neurologic examination is normal."
      ],
      question: "Damage to which region best explains this change in behavior?",
      choices: [
        { text: "Dorsolateral prefrontal cortex", why: "Dorsolateral damage causes a dysexecutive syndrome: poor planning, set-shifting, and working memory, with perseveration. It's more about disorganization than disinhibition, and it would likely lower his screening score." },
        { text: "Orbitofrontal cortex", why: "Correct. The orbitofrontal cortex regulates social behavior and impulse control. Damage causes disinhibition, impulsivity, inappropriate jokes, and irritability, often with normal cognitive testing." },
        { text: "Medial prefrontal cortex and anterior cingulate", why: "Medial frontal damage causes abulia: apathy, little speech or spontaneous movement, and sometimes akinetic mutism and urinary incontinence (ACA territory). He is the opposite: too much output." },
        { text: "Supplementary motor area", why: "The supplementary motor area plans movement sequences. Damage causes trouble initiating movement or an alien hand, not personality change." },
        { text: "Hippocampus", why: "Hippocampal damage causes anterograde amnesia. His memory and cognition are intact." }
      ],
      answer: "B",
      explanation: "The orbitofrontal cortex sits on the bony ridges of the anterior cranial fossa. It's one of the most commonly bruised regions in acceleration-deceleration head injury, along with the anterior temporal poles. The classic result is a personality change toward disinhibition with preserved IQ and memory, like Phineas Gage.",
      takeaway: "Frontal syndromes: orbitofrontal = disinhibited, dorsolateral = disorganized, medial = apathetic (abulia)."
    },
    {
      id: "q13",
      topic: "Spinal cord & motor tracts",
      source: "Step 1",
      stem: [
        "A 62-year-old woman with autoimmune thyroiditis has 6 months of progressive tingling in her feet and an unsteady gait that is worse in the dark. Examination shows loss of vibration and position sense in the feet, a positive Romberg sign, brisk knee reflexes, and bilateral extensor plantar responses. Her hemoglobin is 9.8 g/dL with a mean corpuscular volume of 112 fL.",
        "A schematic of her cervical spinal cord is shown below, with the regions of demyelination shaded."
      ],
      image: {
        src: "images/spinal-cord.svg",
        alt: "Schematic cross-section of the cervical spinal cord. The dorsal columns and the lateral corticospinal tracts on both sides are shaded.",
        caption: "Cervical spinal cord, schematic (not to scale)"
      },
      question: "Which of the following laboratory findings is most likely?",
      choices: [
        { text: "Elevated serum methylmalonic acid and homocysteine", why: "Correct. B12 is a cofactor for methylmalonyl-CoA mutase (MMA builds up without it) and methionine synthase (homocysteine builds up). Elevated MMA confirms B12 deficiency, here likely from pernicious anemia." },
        { text: "Elevated homocysteine with normal methylmalonic acid", why: "That pattern indicates folate deficiency, which causes macrocytic anemia but not subacute combined degeneration." },
        { text: "Positive serum RPR and FTA-ABS", why: "Tabes dorsalis (tertiary syphilis) damages the dorsal columns and dorsal roots only. Reflexes are LOST, there are no upper motor neuron signs, and Argyll Robertson pupils are typical." },
        { text: "Expanded GAA repeat in the frataxin gene", why: "Friedreich ataxia begins in childhood or adolescence, with absent reflexes, hypertrophic cardiomyopathy, diabetes, and pes cavus. It doesn't cause macrocytic anemia." },
        { text: "Oligoclonal bands in the cerebrospinal fluid", why: "MS causes patchy demyelinating lesions scattered in time and space, not symmetric degeneration of specific tracts with macrocytic anemia." }
      ],
      answer: "A",
      explanation: "Subacute combined degeneration affects the dorsal columns (vibration and proprioception loss, positive Romberg) and the lateral corticospinal tracts (spasticity, hyperreflexia, Babinski), often the spinocerebellar tracts as well. Macrocytic anemia plus autoimmune disease points to pernicious anemia.",
      takeaway: "Dorsal columns + lateral corticospinal tracts + macrocytic anemia = B12 deficiency. Elevated MMA separates B12 from folate deficiency. Giving folate alone can fix the anemia while the nerve damage progresses."
    },
    {
      id: "q14",
      topic: "Cortex, vision & behavior",
      source: "Curriculum",
      stem: [
        "A 47-year-old man recovers from a severe case of herpes simplex encephalitis that caused bilateral necrosis of his anterior medial temporal lobes. Over the following months, his wife notices that he puts nonfood objects in his mouth, makes sexual advances toward strangers, and seems strangely calm and unafraid, even when a large dog lunges at him."
      ],
      question: "Bilateral damage to which structure is most responsible for his loss of fear and emotional placidity?",
      choices: [
        { text: "Amygdala", why: "Correct. The amygdala attaches emotional meaning, especially fear, to stimuli. Bilateral destruction causes Klüver-Bucy syndrome: hyperorality, hypersexuality, docility and lack of fear, and visual agnosia." },
        { text: "Mammillary bodies", why: "Mammillary body damage (thiamine deficiency) causes Wernicke-Korsakoff: anterograde and retrograde amnesia with confabulation, not loss of fear." },
        { text: "Hippocampus", why: "HSV often damages the hippocampus too, causing anterograde amnesia, but hippocampal damage doesn't remove fear or cause hyperorality." },
        { text: "Ventromedial hypothalamus", why: "The ventromedial hypothalamus is the satiety center. Lesions cause overeating, obesity, and in animals aggression, not placidity or mouthing of objects." },
        { text: "Caudate nucleus", why: "Caudate degeneration (Huntington disease) causes chorea and psychiatric symptoms, not Klüver-Bucy features." }
      ],
      answer: "A",
      explanation: "HSV-1 encephalitis favors the medial temporal and orbitofrontal lobes, so it's a classic cause of bilateral amygdala damage. The amygdala sits just in front of the hippocampus at the tip of the temporal horn. Remember the other limbic syndromes from the review deck: Wernicke-Korsakoff (mammillary bodies) and Urbach-Wiethe (amygdala calcification, absent fear).",
      takeaway: "Klüver-Bucy = bilateral amygdala (classically HSV): hyperorality, hypersexuality, no fear, docility."
    },
    {
      id: "q15",
      topic: "Neurophysiology & pharmacology",
      source: "Curriculum",
      stem: [
        "A 52-year-old woman is brought to the emergency department after taking an unknown number of her zolpidem tablets with a glass of wine. She is drowsy but protecting her airway. Her pupils are normal in size, and her respiratory rate is 12/min."
      ],
      question: "Which of the following agents would most directly reverse the effect of zolpidem, and why?",
      choices: [
        { text: "Naloxone, because zolpidem activates μ-opioid receptors", why: "Naloxone reverses opioids (pinpoint pupils, respiratory depression). Zolpidem doesn't act on opioid receptors." },
        { text: "Flumazenil, because zolpidem binds the benzodiazepine site of GABA-A receptors", why: "Correct. Zolpidem is a positive allosteric modulator at the benzodiazepine site (especially α1-containing GABA-A receptors). Flumazenil competitively blocks that site." },
        { text: "Physostigmine, because zolpidem blocks muscarinic receptors", why: "Physostigmine reverses anticholinergic toxicity (hot, dry, flushed, dilated pupils, delirium). Zolpidem isn't anticholinergic." },
        { text: "Baclofen, because zolpidem antagonizes GABA-B receptors", why: "Baclofen is a GABA-B agonist used for spasticity. It would add to sedation, and zolpidem doesn't act at GABA-B." },
        { text: "Bicuculline, because zolpidem binds the GABA site of GABA-A receptors", why: "Zolpidem binds the benzodiazepine site, not the GABA site. Bicuculline is a research convulsant that blocks the GABA site, not a clinical antidote." }
      ],
      answer: "B",
      explanation: "Zolpidem (a “Z-drug”) is structurally different from benzodiazepines but binds the same allosteric site on GABA-A receptors. It increases Cl⁻ current only when GABA is bound, which makes it a positive allosteric modulator, not an agonist. Flumazenil reverses both, but use it cautiously: in chronic benzodiazepine users it can precipitate withdrawal seizures.",
      takeaway: "Benzodiazepines ↑ FREQUENCY of Cl⁻ channel opening; barbiturates ↑ DURATION; Z-drugs act at the benzodiazepine (BZ1) site and are reversed by flumazenil."
    },
    {
      id: "q16",
      topic: "Stroke & vascular",
      source: "Curriculum",
      stem: [
        "A 63-year-old man with atrial fibrillation suddenly develops double vision and weakness. His left upper eyelid droops, and his left eye rests down and out with a dilated pupil that doesn't constrict to light. He has weakness of the right arm, right leg, and right lower face, with right-sided hyperreflexia. Sensation and coordination are normal."
      ],
      question: "Which pair of structures has most likely been damaged?",
      choices: [
        { text: "Left oculomotor nerve fascicles and left cerebral peduncle", why: "Correct. This is Weber syndrome (medial midbrain): the CN III fascicles cause an ipsilateral (left) oculomotor palsy, and the corticospinal and corticobulbar fibers in the cerebral peduncle cause contralateral (right) hemiparesis, including the lower face." },
        { text: "Right oculomotor nucleus and right cerebral peduncle", why: "A single brainstem lesion causes cranial nerve signs on the SAME side and body signs on the OPPOSITE side. Left CN III with right hemiparesis puts the lesion on the left." },
        { text: "Left oculomotor nerve fascicles and left red nucleus", why: "That's Benedikt syndrome. Red nucleus involvement adds a contralateral tremor or ataxia. His problem is weakness with hyperreflexia, without incoordination." },
        { text: "Left medial longitudinal fasciculus and left pyramid", why: "An MLF lesion causes an INO (failure of adduction on lateral gaze) without ptosis or pupil changes. The pyramid is in the medulla, far from the oculomotor nerve." },
        { text: "Left abducens nucleus and left corticospinal tract in the pons", why: "Medial pontine lesions cause an ipsilateral horizontal gaze palsy (or CN VI palsy) with contralateral hemiparesis. They don't cause ptosis or a dilated pupil." }
      ],
      answer: "A",
      explanation: "The CN III fascicles run ventrally through the midbrain and exit in the interpeduncular fossa, right next to the cerebral peduncle. One small paramedian infarct (from paramedian branches of the PCA or top of the basilar) catches both.",
      takeaway: "Weber syndrome = ipsilateral CN III palsy + contralateral hemiparesis (medial midbrain). Benedikt adds the red nucleus (tremor/ataxia)."
    },
    {
      id: "q17",
      topic: "Sleep",
      source: "Curriculum",
      stem: [
        "A 6-year-old boy is brought to the pediatrician because about once a week, roughly 90 minutes after falling asleep, he sits up screaming with his eyes open, sweating and breathing rapidly. During these episodes he is inconsolable and doesn't seem to recognize his parents. After 5–10 minutes he falls back asleep, and the next morning he has no memory of the event."
      ],
      question: "An EEG recorded just before one of these episodes would most likely show which of the following?",
      choices: [
        { text: "Low-voltage, mixed-frequency activity with sawtooth waves", why: "That's REM sleep. Nightmares arise from REM: the child wakes easily, is consolable, and remembers the dream. REM dominates the later part of the night." },
        { text: "Theta waves", why: "Theta is the dominant rhythm of N1, the lightest transitional sleep stage." },
        { text: "Sleep spindles and K-complexes", why: "These define N2, which makes up most of the night but isn't where sleep terrors arise." },
        { text: "High-amplitude delta waves", why: "Correct. Sleep terrors (and sleepwalking) are partial arousals from N3, slow-wave sleep, which is concentrated in the first third of the night. That explains the timing, inconsolability, and amnesia." },
        { text: "Alpha waves", why: "Alpha is the relaxed, awake, eyes-closed rhythm." }
      ],
      answer: "D",
      explanation: "Non-REM parasomnias (sleep terrors, sleepwalking, confusional arousals) come from incomplete arousal out of N3 sleep. They happen early in the night, the child is hard to wake and confused, and they have no memory of it. They're common in children and usually outgrown by adolescence.",
      takeaway: "Sleep terrors and sleepwalking = N3 (delta), first third of the night, no memory. Nightmares and REM sleep behavior disorder = REM, later in the night, dream recall."
    },
    {
      id: "q18",
      topic: "Spinal cord & motor tracts",
      source: "Curriculum",
      stem: [
        "A 58-year-old woman is comatose after a large hemorrhage involving both cerebral hemispheres; her brainstem is intact on imaging. When a painful stimulus is applied, her arms flex at the elbows and wrists with the hands drawn up to the chest, while her legs extend and rotate inward."
      ],
      question: "Which descending pathway most directly produces the flexion of her upper limbs?",
      choices: [
        { text: "Lateral vestibulospinal tract", why: "The vestibulospinal tract drives antigravity EXTENSOR tone. It contributes to the leg extension here and to the all-limb extension of decerebrate posturing." },
        { text: "Pontine reticulospinal tract", why: "The pontine reticulospinal tract also drives extensor and postural tone, contributing to leg extension rather than arm flexion." },
        { text: "Rubrospinal tract", why: "Correct. The red nucleus excites upper limb flexors. With the cortex knocked out but the red nucleus intact, rubrospinal drive goes unchecked and pulls the arms into flexion." },
        { text: "Anterior corticospinal tract", why: "The anterior corticospinal tract controls axial muscles and starts in the cortex, which is the damaged part here." },
        { text: "Tectospinal tract", why: "The tectospinal tract runs from the superior colliculus and coordinates head turning with eye movements, not limb posture." }
      ],
      answer: "C",
      explanation: "Decorticate posturing means a lesion ABOVE the red nucleus (cerebral hemispheres, internal capsule, thalamus). The rubrospinal tract flexes the arms while the vestibulospinal and reticulospinal tracts extend the legs. A lesion BELOW the red nucleus (midbrain or upper pons) removes rubrospinal drive, leaving only extensor pathways: decerebrate posturing, with all limbs extended and a worse prognosis.",
      takeaway: "Decorticate (above the red nucleus): arms flexed, legs extended. Decerebrate (below the red nucleus, midbrain/upper pons): all limbs extended."
    },
    {
      id: "q19",
      topic: "Clinical neurology",
      source: "Curriculum",
      stem: [
        "A 67-year-old right-handed woman has 2 years of progressive stiffness and clumsiness of her left arm. She can't demonstrate how to use a comb or wave goodbye with her left hand, even though her strength and comprehension are normal. Her left hand sometimes rises and grasps objects without her meaning it to, and with her eyes closed she can't identify coins placed in her left palm.",
        "There is asymmetric rigidity and myoclonus of the left arm. A trial of carbidopa-levodopa gave no benefit."
      ],
      question: "Which of the following is the most likely diagnosis?",
      choices: [
        { text: "Parkinson disease", why: "Parkinson disease usually begins with a resting tremor and responds well to levodopa. It doesn't cause cortical signs like apraxia, alien limb, or cortical sensory loss." },
        { text: "Progressive supranuclear palsy", why: "PSP features a vertical (especially downward) supranuclear gaze palsy, early backward falls, and axial more than limb rigidity, with midbrain atrophy (the “hummingbird” sign)." },
        { text: "Multiple system atrophy", why: "MSA combines parkinsonism or ataxia with early autonomic failure (orthostatic hypotension, urinary problems) and shows the “hot cross bun” sign. It doesn't cause limb apraxia or alien limb." },
        { text: "Corticobasal degeneration", why: "Correct. CBD causes asymmetric parkinsonism (the basal ganglia part) plus cortical signs: limb apraxia, alien limb, cortical sensory loss (here, astereognosis), and myoclonus. It responds poorly to levodopa." },
        { text: "Dementia with Lewy bodies", why: "Dementia with Lewy bodies features early fluctuating cognition, well-formed visual hallucinations, parkinsonism, and severe sensitivity to antipsychotics." }
      ],
      answer: "D",
      explanation: "The atypical parkinsonian syndromes are each recognized by one hallmark: PSP, gaze palsy and falls; MSA, autonomic failure; DLB, hallucinations and fluctuations; CBD, apraxia and alien limb. CBD and PSP are tauopathies; MSA and DLB are synucleinopathies.",
      takeaway: "Asymmetric parkinsonism + limb apraxia + alien limb + cortical sensory loss = corticobasal degeneration (a tauopathy)."
    },
    {
      id: "q20",
      topic: "Vestibular & coma exam",
      source: "Curriculum",
      stem: [
        "A 50-year-old man remains unresponsive 3 days after a cardiac arrest. MRI shows diffuse injury to both cerebral hemispheres, and the brainstem appears normal. His pupils are reactive, and corneal and cough reflexes are present. The physician irrigates his LEFT external auditory canal with ice-cold water."
      ],
      question: "Which eye response is expected?",
      choices: [
        { text: "Horizontal nystagmus with the fast phase beating to the right", why: "That's the normal response in an AWAKE person (COWS: cold, opposite). The fast, corrective phase needs the cortex (frontal eye fields), which isn't working in this patient." },
        { text: "Horizontal nystagmus with the fast phase beating to the left", why: "A leftward fast phase is what warm water in the left ear produces in an awake person. And a comatose patient has no fast phase at all." },
        { text: "Tonic conjugate deviation of both eyes toward the left, without a fast phase", why: "Correct. Cold water quiets the left vestibular input, so the brainstem vestibulo-ocular reflex drives both eyes slowly toward the cold ear. With the cortex out, no fast phase brings them back." },
        { text: "Tonic deviation of both eyes toward the right", why: "The slow, tonic movement goes TOWARD the cold-irrigated ear, not away from it." },
        { text: "No eye movement", why: "No response means brainstem vestibulo-ocular pathways aren't working (brainstem lesion, brain death, or vestibular-suppressing drugs). His brainstem reflexes are intact." }
      ],
      answer: "C",
      explanation: "The caloric test checks the brainstem vestibulo-ocular reflex (CN VIII → vestibular nuclei → MLF → CN III and VI). In coma with an intact brainstem, only the slow phase is left, so the eyes turn tonically toward the cold ear. The same reasoning applies to the oculocephalic (“doll's eyes”) reflex: an intact brainstem makes the eyes move opposite to the head turn.",
      takeaway: "Comatose with an intact brainstem: cold water → eyes deviate TOWARD the irrigated ear, with no fast phase. No movement → brainstem dysfunction."
    },
    {
      id: "q21",
      topic: "Brainstem & cranial nerves",
      source: "Curriculum",
      stem: [
        "A 54-year-old woman comes to the emergency department with a severe headache that began 2 days ago and new double vision. Her right upper eyelid droops, and when the lid is lifted, her right eye sits down and out.",
        "Light shone in the right eye makes the left pupil constrict but not the right. Light shone in the left eye also makes only the left pupil constrict. The right pupil measures 7 mm."
      ],
      question: "Which of the following is the most likely cause?",
      choices: [
        { text: "Demyelinating lesion of the right optic nerve", why: "An optic nerve (afferent) lesion causes a relative afferent pupillary defect: light in the bad eye constricts BOTH pupils weakly, while light in the good eye constricts both normally. Here the right pupil never constricts, whichever eye is lit, which means an efferent (CN III) problem." },
        { text: "Microvascular ischemia of the right oculomotor nerve from diabetes", why: "Diabetic CN III palsy damages the central motor fibers and usually SPARES the pupil, because the pupillary fibers run on the surface with a separate blood supply." },
        { text: "Aneurysm of the right posterior communicating artery", why: "Correct. A PCom aneurysm compresses CN III from outside, hitting the superficial parasympathetic fibers first. The result is a painful CN III palsy with a dilated pupil that doesn't react to direct or consensual light." },
        { text: "Lesion of the right sympathetic chain at the lung apex", why: "Horner syndrome causes a mild ptosis with a SMALL pupil and normal eye movements." },
        { text: "Infarct of the left Edinger-Westphal nucleus", why: "A left Edinger-Westphal lesion would stop the LEFT pupil from constricting, and it wouldn't explain the ptosis or the down-and-out eye." }
      ],
      answer: "C",
      explanation: "Solve pupil problems in two steps. (1) Is it afferent or efferent? If one pupil never constricts whichever eye is lit, the problem is efferent on that side. (2) Is the pupil involved? A complete CN III palsy with a blown pupil means compression (PCom aneurysm, uncal herniation) until proven otherwise. With a spared pupil, think ischemia (diabetes, hypertension).",
      takeaway: "CN III palsy + blown pupil = compression (PCom aneurysm, uncal herniation). CN III palsy with a normal pupil = ischemia (diabetes)."
    },
    {
      id: "q22",
      topic: "Clinical neurology",
      source: "Curriculum",
      stem: [
        "A 17-year-old boy is evaluated for frequent ankle sprains and tripping. His mother and maternal grandfather have similar “skinny legs” and high-arched feet. Examination shows pes cavus, hammer toes, wasting of the distal lower legs, weak ankle dorsiflexion, reduced vibration sense in the toes, and absent ankle reflexes.",
        "Nerve conduction studies show uniformly slowed conduction velocities in both motor and sensory nerves."
      ],
      question: "Which genetic abnormality is most likely?",
      choices: [
        { text: "Duplication of the PMP22 gene", why: "Correct. CMT1A, the most common Charcot-Marie-Tooth type, is an autosomal dominant duplication of PMP22 (peripheral myelin protein 22) on chromosome 17. It causes a demyelinating sensorimotor neuropathy with uniformly slow conduction." },
        { text: "Homozygous deletion of SMN1", why: "Spinal muscular atrophy affects anterior horn cells. It presents in infancy or childhood with proximal weakness, hypotonia, and tongue fasciculations, with no sensory loss. It's autosomal recessive." },
        { text: "GAA trinucleotide repeat expansion in the frataxin gene", why: "Friedreich ataxia can cause pes cavus too, but it's autosomal recessive and adds ataxia, a Babinski sign, cardiomyopathy, and diabetes. This family's inheritance is autosomal dominant." },
        { text: "Frameshift deletion in the dystrophin gene", why: "Duchenne dystrophy is X-linked and causes proximal weakness, a Gowers sign, and calf pseudohypertrophy in young boys. It doesn't cause sensory loss or slow nerve conduction." },
        { text: "Mutation in SOD1", why: "SOD1 mutations cause familial ALS: mixed upper and lower motor neuron signs in adults, with no sensory loss." }
      ],
      answer: "A",
      explanation: "CMT is a group of inherited peripheral neuropathies. Long nerves fail first, so the distal legs waste (“inverted champagne bottle” legs) and the feet deform (pes cavus, hammer toes). In the demyelinating type 1, conduction velocity is uniformly slow because myelin is abnormal everywhere, not patchy as in acquired demyelination like Guillain-Barré.",
      takeaway: "Pes cavus + hammer toes + distal wasting + uniformly slow conduction + autosomal dominant inheritance = CMT1A (PMP22 duplication)."
    },
    {
      id: "q23",
      topic: "Clinical neurology",
      source: "Step 1",
      stem: [
        "A 27-year-old woman has 4 days of numbness rising from her feet to her waist. Two years ago she had an episode of painful vision loss in her left eye that resolved over 6 weeks. Examination shows a right internuclear ophthalmoplegia and a sensory level at T10.",
        "MRI shows multiple ovoid T2-hyperintense lesions oriented perpendicular to the lateral ventricles."
      ],
      question: "Which cerebrospinal fluid finding is most likely?",
      choices: [
        { text: "Elevated protein with a normal white cell count", why: "Albuminocytologic dissociation is the classic CSF finding in Guillain-Barré syndrome, which causes an ascending flaccid weakness with absent reflexes." },
        { text: "Oligoclonal IgG bands not present in serum", why: "Correct. Oligoclonal bands (and a raised IgG index) reflect antibody production inside the CNS and are found in most patients with multiple sclerosis." },
        { text: "Elevated 14-3-3 protein", why: "14-3-3 protein (and RT-QuIC) points to Creutzfeldt-Jakob disease: rapidly progressive dementia with myoclonus." },
        { text: "Neutrophilic pleocytosis with low glucose", why: "This pattern indicates acute bacterial meningitis: fever, neck stiffness, altered mental status." },
        { text: "Xanthochromia", why: "Yellow CSF from broken-down red cells suggests subarachnoid hemorrhage." }
      ],
      answer: "B",
      explanation: "She has lesions disseminated in time (optic neuritis 2 years ago, now new symptoms) and in space (optic nerve, MLF, spinal cord). Lesions perpendicular to the ventricles (“Dawson fingers”) are classic for MS. A young woman with an INO is the classic Step 1 pairing.",
      takeaway: "MS: optic neuritis, INO, transverse myelitis, “Dawson fingers” on MRI, oligoclonal bands in CSF. Symptoms worsen with heat (Uhthoff phenomenon)."
    },
    {
      id: "q24",
      topic: "Stroke & vascular",
      source: "Curriculum",
      stem: [
        "A 72-year-old woman is brought to the emergency department after her husband notices her right leg “dragging.” Examination shows marked weakness and decreased sensation in the right leg, with only mild weakness of the right shoulder and normal strength in the right hand and face.",
        "Since the onset she has been unusually apathetic and slow to respond, and she has been incontinent of urine. Language is normal."
      ],
      question: "Occlusion of which artery best explains her findings?",
      choices: [
        { text: "Left middle cerebral artery, superior division", why: "An MCA stroke affects the lateral cortex: face and arm more than leg, and expressive aphasia if dominant. Her face and hand are spared and her language is normal." },
        { text: "Right anterior cerebral artery", why: "A right ACA stroke would cause LEFT leg weakness." },
        { text: "Left lenticulostriate arteries", why: "A lacunar infarct of the internal capsule causes pure motor hemiparesis affecting face, arm, and leg equally, without sensory loss, apathy, or incontinence." },
        { text: "Left posterior cerebral artery", why: "A PCA stroke causes a contralateral homonymous hemianopia and sometimes thalamic sensory loss, not leg-predominant weakness." },
        { text: "Left anterior cerebral artery", why: "Correct. The ACA supplies the medial frontal and parietal cortex, where the leg area of the homunculus sits (paracentral lobule), plus the medial frontal areas for motivation and bladder control." }
      ],
      answer: "E",
      explanation: "On the homunculus, the leg and foot hang over the medial surface of the hemisphere, inside ACA territory, while the face and hand sit laterally in MCA territory. The ACA also supplies the medial prefrontal cortex and anterior cingulate (abulia) and the cortical micturition center (incontinence).",
      takeaway: "ACA = contralateral leg + urinary incontinence + abulia. MCA = contralateral face and arm + aphasia (dominant) or neglect (nondominant)."
    },
    {
      id: "q25",
      topic: "Basal ganglia & cerebellum",
      source: "Curriculum",
      stem: [
        "A 58-year-old man with a 30-year history of heavy alcohol use has a broad-based, staggering gait and can't walk heel-to-toe. Finger-to-nose testing and rapid alternating hand movements are nearly normal. Eye movements, strength, and reflexes are normal."
      ],
      question: "MRI would most likely show atrophy of which structure?",
      choices: [
        { text: "Flocculonodular lobe", why: "Flocculonodular lesions disturb vestibular function: truncal imbalance WITH nystagmus and vertigo (for example, a medulloblastoma in a child). His eye movements are normal." },
        { text: "Right cerebellar hemisphere", why: "The lateral hemispheres coordinate the limbs on the same side. Damage causes ipsilateral dysmetria, intention tremor, and dysdiadochokinesia, and his arms are nearly normal." },
        { text: "Dentate nuclei", why: "The dentate nuclei carry lateral hemisphere output through the superior cerebellar peduncle. Damage causes limb ataxia and dysdiadochokinesia, not isolated gait ataxia." },
        { text: "Middle cerebellar peduncles", why: "The middle peduncles carry input from the opposite pontine nuclei. They atrophy in the cerebellar type of MSA (“hot cross bun” sign), which also causes limb ataxia and autonomic failure." },
        { text: "Anterior superior vermis", why: "Correct. Chronic alcohol use (plus thiamine deficiency) degenerates the anterior superior vermis, which controls the trunk and legs. The result is a wide-based gait with relatively spared arms." }
      ],
      answer: "E",
      explanation: "Cerebellar anatomy follows a simple rule: midline = axial (trunk, gait, posture), lateral = limbs (same side). Alcoholic cerebellar degeneration is the classic midline syndrome: gait ataxia with relatively spared arms and speech.",
      takeaway: "Vermis = trunk and gait. Lateral hemispheres = ipsilateral limbs. Alcohol → anterior superior vermis → broad-based gait with arms spared."
    },
    {
      id: "q26",
      topic: "Brainstem & cranial nerves",
      source: "Curriculum",
      stem: [
        "A 49-year-old man has 1 year of progressive hearing loss and ringing in his right ear. MRI shows a mass at the right cerebellopontine angle.",
        "When a wisp of cotton touches his right cornea, neither eye blinks. When the cotton touches his left cornea, both eyes blink briskly."
      ],
      question: "Damage to which nerve best explains the abnormal corneal reflex?",
      choices: [
        { text: "Right facial nerve", why: "A right CN VII lesion would stop the RIGHT eye from blinking no matter which cornea was touched, while the left eye would blink both times. Here both eyes blink when the left side is touched." },
        { text: "Left facial nerve", why: "A left CN VII lesion would stop the LEFT eye from blinking to either side. His left eye blinks briskly when the left cornea is touched." },
        { text: "Right oculomotor nerve", why: "CN III raises the eyelid (levator palpebrae). It isn't part of the blink, which closes the lid through the orbicularis oculi (CN VII)." },
        { text: "Left trigeminal nerve (ophthalmic division)", why: "A left V1 lesion would cause the failure when the LEFT cornea was touched." },
        { text: "Right trigeminal nerve (ophthalmic division)", why: "Correct. The afferent limb is V1 from the touched cornea, and the efferent limb is CN VII to BOTH eyes. When touching one side produces no blink in either eye, the sensory (V) side is the problem." }
      ],
      answer: "E",
      explanation: "The corneal reflex has a sensory arm (V1) and a motor arm (VII to both orbicularis oculi muscles). Neither eye blinking to one side means that side's afferent (V) is damaged. One eye never blinking, whichever side is touched, means that eye's efferent (VII) is damaged. A vestibular schwannoma at the cerebellopontine angle grows from CN VIII (hearing loss, tinnitus) and often affects CN V early, causing a lost corneal reflex, before CN VII.",
      takeaway: "Corneal reflex: afferent V1, efferent VII to both eyes. Neither eye blinks → afferent (V) lesion. One eye never blinks → efferent (VII) lesion on that side."
    },
    {
      id: "q27",
      topic: "Spinal cord & motor tracts",
      source: "Curriculum",
      stem: [
        "A 31-year-old woman is evaluated after a diving accident. MRI shows a small lesion confined to the lateral part of the LEFT dorsal column at the C5 level (the fasciculus cuneatus). All other tracts and the gray matter are spared."
      ],
      question: "Which deficit is most likely?",
      choices: [
        { text: "Loss of vibration and position sense in the left arm", why: "Correct. The fasciculus cuneatus carries fine touch, vibration, and proprioception from the upper body (above about T6) on the same side. It stays ipsilateral until it synapses in the nucleus cuneatus in the medulla." },
        { text: "Loss of vibration and position sense in the left leg", why: "Leg fibers travel in the fasciculus gracilis, the MEDIAL part of the dorsal column." },
        { text: "Loss of vibration and position sense in the right arm", why: "Dorsal column fibers don't cross in the spinal cord; they cross in the medulla as internal arcuate fibers. A cord lesion causes loss on the same side." },
        { text: "Loss of pain and temperature sensation in the right arm", why: "Pain and temperature travel in the spinothalamic tract (anterolateral), which is spared here." },
        { text: "Loss of pain and temperature sensation over both shoulders", why: "A bilateral “cape” loss of pain and temperature comes from a central cord lesion (syringomyelia) damaging crossing fibers in the anterior white commissure." }
      ],
      answer: "A",
      explanation: "The dorsal columns are laid out by body region: new fibers entering at higher levels are added laterally. So the gracilis (sacral, lumbar, low thoracic: legs) is medial and the cuneatus (upper thoracic and cervical: arms) is lateral. The cuneatus exists only above T6.",
      takeaway: "Dorsal columns: gracilis (medial) = legs, cuneatus (lateral) = arms. They stay ipsilateral until the medulla."
    },
    {
      id: "q28",
      topic: "Clinical neurology",
      source: "Step 1",
      stem: [
        "A 74-year-old man has 1 year of worsening gait, forgetfulness, and urinary urgency with occasional incontinence. He walks slowly with short, shuffling steps, his feet seem “stuck to the floor,” and he turns his whole body at once. There is no tremor.",
        "CT of the head shows enlarged lateral ventricles out of proportion to sulcal widening. Opening pressure on lumbar puncture is normal, and his gait improves noticeably after 40 mL of CSF is removed."
      ],
      question: "Which treatment is most likely to produce lasting improvement?",
      choices: [
        { text: "Donepezil", why: "Cholinesterase inhibitors are for Alzheimer disease, where memory loss comes first and gait stays normal until late." },
        { text: "Carbidopa-levodopa", why: "His gait can look parkinsonian, but NPH doesn't respond to levodopa, and he has no tremor or rigidity." },
        { text: "Acetazolamide", why: "Acetazolamide reduces CSF production and treats idiopathic intracranial hypertension: young women with obesity, papilledema, and a HIGH opening pressure." },
        { text: "Ventriculoperitoneal shunt", why: "Correct. Improvement after a large-volume lumbar puncture (tap test) predicts a good response to CSF diversion with a VP shunt." },
        { text: "Thiamine", why: "Thiamine treats Wernicke encephalopathy: confusion, ophthalmoplegia, and ataxia in malnutrition or alcohol use disorder." }
      ],
      answer: "D",
      explanation: "Normal pressure hydrocephalus is a communicating hydrocephalus. CSF absorption fails, the ventricles enlarge, and they stretch the nearby corona radiata fibers that control the legs and bladder. Gait usually goes first (a “magnetic” gait), then urinary symptoms, then cognitive decline. It's one of the few reversible causes of dementia.",
      takeaway: "NPH: “wet, wobbly, wacky” (incontinence, gait, dementia) + large ventricles + normal opening pressure. Improvement after a tap test → VP shunt."
    },
    {
      id: "q29",
      topic: "Neurophysiology & pharmacology",
      source: "Step 1",
      stem: [
        "A 19-year-old man undergoing knee surgery under sevoflurane anesthesia develops jaw muscle rigidity shortly after receiving succinylcholine. Over the next 20 minutes his end-tidal CO₂ rises sharply, his heart rate climbs, his temperature reaches 40.5°C (104.9°F), and labs show hyperkalemia and metabolic acidosis. His uncle died unexpectedly during surgery years ago."
      ],
      question: "Which of the following best describes the mechanism of the drug that should be given immediately?",
      choices: [
        { text: "Dopamine D2 receptor agonist", why: "Bromocriptine (a D2 agonist) is sometimes used for neuroleptic malignant syndrome, which follows antipsychotic use and develops over days with “lead-pipe” rigidity." },
        { text: "Serotonin 5-HT2A receptor antagonist", why: "Cyproheptadine treats serotonin syndrome: agitation, hyperreflexia, clonus, and diarrhea after serotonergic drugs." },
        { text: "Inhibition of Ca²⁺ release through ryanodine receptors in the sarcoplasmic reticulum", why: "Correct. Dantrolene blocks RyR1, stopping the uncontrolled Ca²⁺ release from the sarcoplasmic reticulum that drives the sustained contraction and heat production of malignant hyperthermia." },
        { text: "Competitive antagonist at nicotinic receptors", why: "Nondepolarizing blockers act at the end plate, but the problem in malignant hyperthermia is inside the muscle cell (sarcoplasmic reticulum Ca²⁺ leak), so they don't stop it." },
        { text: "Acetylcholinesterase inhibitor", why: "Raising ACh would only increase muscle activation. It has no role here." }
      ],
      answer: "C",
      explanation: "Malignant hyperthermia is an autosomal dominant disorder (usually an RYR1 mutation) in which volatile anesthetics or succinylcholine trigger runaway Ca²⁺ release in skeletal muscle. A rising end-tidal CO₂ is often the earliest sign. Then come rigidity, hyperthermia, hyperkalemia, acidosis, and rhabdomyolysis. Stop the trigger and give dantrolene.",
      takeaway: "Malignant hyperthermia: RYR1 mutation + volatile anesthetic or succinylcholine → rigidity, ↑CO₂, hyperthermia, ↑K⁺. Treat with dantrolene (blocks RyR1)."
    },
    {
      id: "q30",
      topic: "Brainstem & cranial nerves",
      source: "Curriculum",
      stem: [
        "A 41-year-old man has 2 days of severe left-sided neck pain and headache that began after a vigorous chiropractic adjustment. His left upper eyelid droops slightly, and his left pupil is smaller than the right, most obviously in dim light. Both pupils constrict normally to light.",
        "Facial sweating is symmetric. Eye movements, facial sensation, and the rest of the neurologic examination are normal."
      ],
      question: "Where is the lesion most likely located?",
      choices: [
        { text: "Left lateral medulla", why: "A lateral medullary stroke damages the first-order (central) sympathetic neuron. It would also cause vertigo, dysphagia, hoarseness, and crossed pain and temperature loss, plus loss of sweating on the face and body." },
        { text: "Left T1 ventral root", why: "A T1 root lesion damages the second-order (preganglionic) neuron, causing loss of facial sweating and usually weakness of the hand intrinsics." },
        { text: "Left lung apex", why: "A Pancoast tumor at the lung apex damages the second-order neuron. Facial sweating would be lost, often with shoulder or arm pain and hand weakness." },
        { text: "Wall of the left internal carotid artery", why: "Correct. The third-order (postganglionic) fibers climb along the internal carotid to the eye. A carotid dissection causes a painful Horner syndrome with facial sweating spared, because sweat fibers to the face follow the EXTERNAL carotid." },
        { text: "Left oculomotor nerve", why: "CN III damage causes a heavy ptosis with a DILATED pupil and a down-and-out eye, the opposite of this small pupil." }
      ],
      answer: "D",
      explanation: "Horner syndrome is ptosis, miosis, and sometimes loss of sweating, from damage anywhere along a three-neuron sympathetic path: hypothalamus → brainstem → C8–T2 (first order); T1 → sympathetic chain over the lung apex → superior cervical ganglion (second order); along the internal carotid to the eye (third order). Neck pain after neck manipulation or trauma with a Horner syndrome and preserved sweating is carotid dissection until proven otherwise.",
      takeaway: "Horner + neck pain + sweating spared = third-order lesion: carotid dissection. Loss of sweating points to a first- or second-order lesion (lateral medulla, Pancoast tumor)."
    }
  ]
};
