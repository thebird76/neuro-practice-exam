// Question bank for Practice Exam 2.
// Same format as exam-1.js; the field notes at the top of that file apply here too.

window.EXAM = {
  id: "neuro-summative-practice-2",
  title: "Neuro Practice Exam 2",
  subtitle: "30 new questions on the same topics, with a few neuro-oncology cases and more Step 1 favorites.",
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
      topic: "Brainstem & cranial nerves",
      source: "Curriculum",
      stem: [
        "A 52-year-old woman has had 4 months of hoarseness, trouble swallowing liquids, and a pulsing “whooshing” sound in her left ear. When she says “ah,” her uvula deviates to the right, and touching the left side of her pharynx produces no gag. She cannot shrug her left shoulder against resistance, and turning her head to the right is weak. Her tongue protrudes in the midline.",
        "CT of the skull base shows an enhancing mass eroding the surrounding bone."
      ],
      question: "The mass is most likely located at which site?",
      choices: [
        { text: "Left hypoglossal canal", why: "Only CN XII passes through the hypoglossal canal. A lesion there makes the tongue deviate toward the left, and her tongue is midline." },
        { text: "Left internal acoustic meatus", why: "CN VII and VIII run through the internal acoustic meatus. A mass there causes facial weakness and hearing loss, not hoarseness, dysphagia, or trapezius weakness." },
        { text: "Left jugular foramen", why: "Correct. CN IX, X, and XI leave the skull together through the jugular foramen. Losing all three explains the absent gag, hoarseness, dysphagia, uvula deviation, and SCM and trapezius weakness." },
        { text: "Left foramen ovale", why: "The foramen ovale carries V3. A lesion there causes numbness of the lower face and weak chewing muscles." },
        { text: "Left lateral medulla", why: "A lateral medullary lesion hits the nucleus ambiguus (hoarseness, dysphagia) but also causes crossed pain and temperature loss, Horner syndrome, and ataxia. The spinal accessory nucleus sits in the upper cervical cord, so SCM and trapezius weakness points to the nerve outside the brainstem." }
      ],
      answer: "C",
      explanation: "When CN IX, X, and XI are all out on one side, think jugular foramen (Vernet syndrome). The uvula is pulled toward the healthy side, so it deviates away from the lesion. The left SCM turns the head to the right, so a weak left SCM makes turning right weak. A pulsatile sound in the ear suggests a glomus jugulare tumor (paraganglioma), a vascular tumor that grows in this foramen. If the mass grew into the hypoglossal canal next door, CN XII would be added.",
      takeaway: "IX + X + XI together = jugular foramen. The uvula points away from the lesion; a weak SCM can't turn the head to the opposite side."
    },
    {
      id: "q02",
      topic: "Cortex, vision & behavior",
      source: "Curriculum",
      stem: [
        "A 66-year-old right-handed man with atrial fibrillation suddenly cannot read the newspaper. He can write a paragraph to dictation without errors but cannot read back what he has just written. He speaks fluently, names objects correctly, understands spoken language, and can identify words that are spelled aloud to him.",
        "Examination shows a right homonymous hemianopia."
      ],
      question: "Occlusion of which artery best explains these findings?",
      choices: [
        { text: "Left posterior cerebral artery", why: "Correct. The left PCA supplies the left occipital lobe (right hemianopia) and the splenium of the corpus callosum. With the splenium cut, what the intact right occipital lobe sees can't reach the left-hemisphere language areas, so he can't read even though he can write." },
        { text: "Inferior division of the left middle cerebral artery", why: "This territory includes Wernicke's area. It causes fluent speech with poor comprehension, and writing is impaired too. He understands speech and writes normally." },
        { text: "Left anterior cerebral artery", why: "The ACA supplies the medial frontal and parietal lobes. It causes leg-predominant weakness and apathy, not a field cut or reading problem." },
        { text: "Right posterior cerebral artery", why: "This causes a left hemianopia. The left occipital lobe and splenium connections would be intact, so reading would be preserved." },
        { text: "Left anterior choroidal artery", why: "The anterior choroidal artery supplies the posterior limb of the internal capsule and part of the optic tract, causing hemiparesis, hemisensory loss, and hemianopia. It does not cause an isolated loss of reading." }
      ],
      answer: "A",
      explanation: "Alexia without agraphia is a disconnection syndrome. The left occipital infarct removes vision from the right field, and the damaged splenium blocks the right occipital lobe from sending words across to the left angular gyrus. The language areas themselves are intact, so he can write, speak, and understand words spelled aloud, but he can't read, not even his own writing.",
      takeaway: "Alexia without agraphia = left PCA (left occipital lobe + splenium). He can write but can't read what he wrote."
    },
    {
      id: "q03",
      topic: "Neurophysiology & pharmacology",
      source: "Curriculum",
      stem: [
        "A 24-year-old man has a tender, fluctuant, red, 3-cm abscess on his thigh. Lidocaine is injected around the abscess before incision and drainage, but he still feels sharp pain during the procedure, even after a second dose. Lidocaine used to repair a hand laceration last year numbed him completely."
      ],
      question: "Which of the following best explains why the lidocaine worked poorly this time?",
      choices: [
        { text: "Inflamed tissue contains more large myelinated pain fibers, which resist local anesthetics", why: "Large myelinated fibers are the slowest to block, but inflammation doesn't change the fiber types. Pain is carried by small Aδ and C fibers, which are normally the first to block." },
        { text: "Pus proteins compete with lidocaine for its binding site on the outside of the sodium channel", why: "Lidocaine binds inside the channel pore, from the cytoplasmic side, not on the outer surface." },
        { text: "Esterases released by neutrophils hydrolyze lidocaine before it reaches the nerve", why: "Lidocaine is an amide (two i's in the name), broken down by the liver, not by esterases. Ester anesthetics like procaine are hydrolyzed by plasma esterases." },
        { text: "Acidic tissue leaves more lidocaine in its charged form, which cannot cross the nerve membrane", why: "Correct. Lidocaine is a weak base. In acidic infected tissue, more of it is protonated, and the charged form can't diffuse through the lipid membrane to reach its binding site inside the sodium channel." },
        { text: "Lidocaine works by blocking voltage-gated K⁺ channels, which inflamed nerves downregulate", why: "Local anesthetics block voltage-gated Na⁺ channels. Blocking K⁺ channels would prolong action potentials, not prevent them." }
      ],
      answer: "D",
      explanation: "Local anesthetics must cross the nerve membrane in their uncharged form, then bind the inner side of the voltage-gated Na⁺ channel in their charged form. Their pKa is above body pH, so even normally much of the drug is charged. Infection lowers tissue pH further, trapping more drug outside the nerve. The fix is a nerve block placed away from the infected area. Fibers block in the order small myelinated (Aδ) > unmyelinated (C) > large myelinated, so pain goes first and pressure and motor function go last.",
      takeaway: "Local anesthetics cross the membrane uncharged and block Na⁺ channels from inside. Acidic (infected) tissue traps them in the charged form."
    },
    {
      id: "q04",
      topic: "Stroke & vascular",
      source: "Curriculum",
      stem: [
        "A 58-year-old man suddenly develops vertigo, vomiting, and hiccups while lifting weights. He has trouble swallowing, and his voice is hoarse. Examination shows decreased pain and temperature sensation on the left side of his face and on the right side of his trunk and limbs. His left pupil is small and his left eyelid droops slightly. Finger-to-nose testing is clumsy on the left.",
        "Strength is normal throughout, and his tongue protrudes in the midline."
      ],
      question: "Occlusion of which artery most likely caused his symptoms?",
      choices: [
        { text: "Left anterior spinal artery", why: "This causes the medial medullary syndrome: tongue deviation toward the lesion, contralateral hemiparesis, and contralateral loss of vibration and position sense. His strength and tongue are normal." },
        { text: "Left posterior inferior cerebellar artery", why: "Correct. This is the lateral medullary (Wallenberg) syndrome, with crossed pain and temperature loss, hoarseness and dysphagia, Horner syndrome, ipsilateral ataxia, and vertigo, all on the left side of the medulla." },
        { text: "Left anterior inferior cerebellar artery", why: "AICA supplies the lateral pons. It causes ipsilateral facial paralysis and hearing loss along with crossed sensory loss and Horner syndrome. The nucleus ambiguus is in the medulla, so hoarseness and dysphagia point to PICA." },
        { text: "Right posterior inferior cerebellar artery", why: "Brainstem signs on the face are on the same side as the lesion. His face, eye, and limb ataxia findings are all on the left, so the lesion is on the left." },
        { text: "Basilar artery", why: "Basilar occlusion causes bilateral signs, such as quadriplegia, coma, or locked-in syndrome, not a one-sided crossed syndrome with normal strength." }
      ],
      answer: "B",
      explanation: "Lateral medullary syndrome: the spinal trigeminal nucleus gives ipsilateral face pain and temperature loss, and the spinothalamic tract gives contralateral body loss. The nucleus ambiguus gives hoarseness, dysphagia, and hiccups; the descending sympathetic fibers give Horner syndrome; the inferior cerebellar peduncle gives ataxia; and the vestibular nuclei give vertigo and vomiting. The pyramids are medial, so strength is spared. Vertebral artery dissection (here, from straining) is a common cause, since the vertebral artery gives rise to PICA.",
      takeaway: "Crossed face/body pain-temperature loss + hoarseness and dysphagia = lateral medulla (PICA). The nucleus ambiguus separates PICA from AICA."
    },
    {
      id: "q05",
      topic: "Spinal cord & motor tracts",
      source: "Curriculum",
      stem: [
        "A 74-year-old man with long-standing arthritis of the neck trips and hits his forehead on a doorframe, forcing his neck backward. CT shows no fracture. He has marked weakness of both hands and forearms, with only mild weakness of the legs, and he can walk with help. Pain sensation is patchy over both arms, and sensation around the anus is preserved. He has urinary retention."
      ],
      question: "Which of the following best explains why his arms are weaker than his legs?",
      choices: [
        { text: "Arm motor fibers cross in the cervical cord, while leg fibers cross in the medulla", why: "All lateral corticospinal fibers, for both arms and legs, cross in the pyramidal decussation in the caudal medulla." },
        { text: "The arms are controlled by the anterior corticospinal tract, which lies next to the central canal", why: "The anterior corticospinal tract is small, uncrossed, and controls axial and proximal muscles. The hands are controlled by the lateral corticospinal tract." },
        { text: "The dorsal columns, which carry arm proprioception, are damaged first", why: "Losing proprioception causes clumsiness and sensory ataxia, not weakness. In this injury the dorsal columns are usually relatively spared." },
        { text: "Only the cervical nerve roots were compressed by the arthritic spine", why: "Root compression would cause pain and loss of sensation and reflexes in a dermatomal pattern. It wouldn't explain leg weakness or urinary retention." },
        { text: "Arm fibers lie medially in the lateral corticospinal tract, closest to the injured center of the cord", why: "Correct. The lateral corticospinal tract is arranged with cervical (arm) fibers medial and sacral (leg) fibers lateral. Injury centered on the middle of the cord hits the arm fibers first." }
      ],
      answer: "E",
      explanation: "This is central cord syndrome, typically from neck hyperextension in an older patient with cervical spondylosis. The cord gets pinched between bone spurs in front and a buckled ligamentum flavum behind, and the center takes the most damage. In both the lateral corticospinal and spinothalamic tracts, sacral fibers are outermost, which explains arms worse than legs and sacral sparing. Crossing pain fibers in the ventral white commissure explain the patchy arm pain loss.",
      takeaway: "Central cord syndrome: arms > legs, with sacral sparing. In the long tracts, the sacral/leg fibers are outermost."
    },
    {
      id: "q06",
      topic: "Clinical neurology",
      source: "Step 1",
      stem: [
        "A 61-year-old man is brought in after a generalized seizure. Over the past 6 weeks he has had morning headaches, has become apathetic, and has had trouble finding words. MRI shows a large, irregular mass with a ring of enhancement and a dark necrotic center that crosses the corpus callosum into both frontal lobes, with surrounding edema.",
        "A biopsy shows a highly cellular astrocytic tumor that stains for glial fibrillary acidic protein (GFAP)."
      ],
      image: {
        src: "images/butterfly-mass.svg",
        alt: "Schematic coronal brain MRI. An irregular mass with a bright rim and dark center spans both hemispheres across the corpus callosum, shaped like a butterfly, with surrounding edema pushing the lateral ventricles down.",
        caption: "Brain MRI at presentation"
      },
      question: "Which additional histologic finding is most characteristic of this tumor?",
      choices: [
        { text: "Whorled spindle cells and psammoma bodies attached to the dura", why: "This is meningioma, an extra-axial tumor that grows from the dura. It is usually benign, well circumscribed, and does not cross the corpus callosum." },
        { text: "Tumor cells lined up around areas of necrosis, with proliferating small blood vessels", why: "Correct. Pseudopalisading necrosis and microvascular proliferation define glioblastoma, the most common primary malignant brain tumor in adults." },
        { text: "Rosenthal fibers and eosinophilic granular bodies in a cystic tumor", why: "These mark pilocytic astrocytoma, a low-grade tumor of children, usually a cyst with an enhancing nodule in the cerebellum." },
        { text: "“Fried egg” cells with a “chicken-wire” capillary network", why: "These mark oligodendroglioma, a slow-growing, often calcified frontal tumor with a 1p/19q codeletion." },
        { text: "Homer Wright rosettes of small, round blue cells", why: "These mark medulloblastoma, a malignant embryonal tumor of the cerebellum in children." }
      ],
      answer: "B",
      explanation: "A ring-enhancing mass with central necrosis that crosses the corpus callosum (a “butterfly glioma”) in an older adult is glioblastoma until proven otherwise. It is a grade 4 astrocytoma: GFAP-positive, with pseudopalisading necrosis and microvascular proliferation. Under the current WHO classification, glioblastoma is IDH-wildtype. Survival is usually measured in months to a couple of years. The most common brain tumors in adults overall are metastases, which are usually multiple and sit at the gray-white junction.",
      takeaway: "Butterfly mass crossing the corpus callosum with ring enhancement = glioblastoma. Histology: pseudopalisading necrosis, GFAP+."
    },
    {
      id: "q07",
      topic: "Vestibular & coma exam",
      source: "Curriculum",
      stem: [
        "A 67-year-old woman has had 1 week of brief spinning spells that start when she rolls onto her right side in bed or tips her head back to reach a high shelf. Each spell lasts less than a minute, and she feels fine between them. Hearing is normal and she has no tinnitus.",
        "With her head turned 45° to the right, she is moved quickly from sitting to lying with her head hanging slightly below the table. After a delay of a few seconds she becomes vertiginous, with upbeating, torsional nystagmus that beats toward the right ear and fades within 30 seconds. Repeating the maneuver produces a weaker response."
      ],
      question: "Which of the following best explains her symptoms?",
      choices: [
        { text: "Inflammation of the right vestibular nerve", why: "Vestibular neuritis causes continuous vertigo lasting days, with spontaneous nystagmus. Her vertigo comes only with head movement and lasts seconds." },
        { text: "Endolymphatic hydrops of the right inner ear", why: "Ménière disease causes spells lasting 20 minutes to hours, with fluctuating hearing loss, tinnitus, and ear fullness." },
        { text: "Ischemia of the right lateral medulla", why: "Central positional nystagmus usually starts immediately, doesn't fade or fatigue, may be purely vertical, and comes with other brainstem signs." },
        { text: "Otoconia displaced into the right posterior semicircular canal", why: "Correct. Loose otoconia in the posterior canal cause brief vertigo when the head moves in that canal's plane. A delayed, fatiguing, upbeating-torsional nystagmus on right Dix-Hallpike is the signature." },
        { text: "Otoconia displaced into the right horizontal semicircular canal", why: "Horizontal canal BPPV is triggered by rolling the head side to side while lying down and causes horizontal nystagmus, not upbeating-torsional nystagmus on Dix-Hallpike." }
      ],
      answer: "D",
      explanation: "Benign paroxysmal positional vertigo is the most common cause of vertigo. The posterior canal is the lowest point of the inner ear when lying down, so it is where loose otoconia usually settle. The Dix-Hallpike maneuver shows the classic peripheral features: a short delay, brief duration, and fatigue with repetition. Treatment is the Epley (canalith repositioning) maneuver, which moves the otoconia back into the utricle; medication isn't needed.",
      takeaway: "Seconds-long positional vertigo + Dix-Hallpike upbeat-torsional nystagmus = posterior canal BPPV. Treat with the Epley maneuver."
    },
    {
      id: "q08",
      topic: "Brainstem & cranial nerves",
      source: "Curriculum",
      stem: [
        "A 45-year-old man has vertical double vision after a small bleed from a vascular malformation in his brainstem. The double vision is worst when he walks down stairs or reads, and he tilts his head toward his left shoulder to make it go away.",
        "Examination shows that his right eye sits higher than the left, most noticeably when he looks down and to the left. The rest of the neurologic exam is normal. MRI shows a tiny hemorrhage in the dorsal midbrain at the level of the inferior colliculus."
      ],
      question: "Which structure is most likely damaged?",
      choices: [
        { text: "Left trochlear nucleus", why: "Correct. Trochlear nerve fibers cross completely before leaving the back of the brainstem. The left trochlear nucleus therefore supplies the right superior oblique, which is the weak muscle here." },
        { text: "Right trochlear nucleus", why: "Because the trochlear fibers cross, the right nucleus supplies the left superior oblique. Damage would raise the left eye, not the right." },
        { text: "Right oculomotor nucleus", why: "The oculomotor nucleus is at the level of the superior colliculus. A lesion there would cause ptosis, pupil changes, and weakness of several eye muscles." },
        { text: "Right medial longitudinal fasciculus", why: "An MLF lesion causes internuclear ophthalmoplegia: the right eye can't adduct on left gaze. It doesn't cause a vertical misalignment." },
        { text: "Left abducens nucleus", why: "The abducens nucleus is in the pons. Damage causes a gaze palsy to the left (horizontal), not vertical diplopia." }
      ],
      answer: "A",
      explanation: "The superior oblique depresses the eye when it is adducted and intorts it. Weakness makes the affected eye ride high, worst looking down and in (reading, stairs), and patients tilt their head away from the weak eye to cancel the lost intorsion. CN IV is the only nerve that exits the back of the brainstem and the only one that crosses completely. A lesion of the nucleus or the fibers before they cross weakens the opposite superior oblique; a lesion of the nerve after it exits (for example, from head trauma) weakens the same-side muscle.",
      takeaway: "CN IV exits dorsally and fully crosses. A trochlear nucleus lesion weakens the opposite superior oblique; the head tilts away from the weak eye."
    },
    {
      id: "q09",
      topic: "Clinical neurology",
      source: "Curriculum",
      stem: [
        "A 63-year-old woman has had 2 months of severe, electric-shock-like pain in her right cheek and upper lip. Each attack lasts a few seconds, and dozens happen each day. Brushing her teeth, chewing, or a light breeze on her face sets them off. She has lost weight because she is afraid to eat. She is pain free between attacks.",
        "The neurologic examination, including facial sensation and corneal reflexes, is normal."
      ],
      question: "Which of the following is the most appropriate first-line treatment?",
      choices: [
        { text: "Sumatriptan", why: "Triptans treat migraine attacks, which last hours and are throbbing, often with nausea and light sensitivity." },
        { text: "High-flow oxygen", why: "Oxygen aborts cluster headache: 15–180 minutes of severe pain around one eye with tearing and nasal congestion." },
        { text: "Prednisone", why: "Steroids treat giant cell arteritis: headache, scalp tenderness, jaw claudication, and a high ESR in an older adult. The pain isn't triggered by touch and doesn't come in seconds-long shocks." },
        { text: "Amitriptyline", why: "Amitriptyline helps some chronic pain and headache syndromes, but it is not first line for trigeminal neuralgia." },
        { text: "Carbamazepine", why: "Correct. Carbamazepine, a sodium channel blocker, is first line for trigeminal neuralgia and controls attacks in most patients." }
      ],
      answer: "E",
      explanation: "Trigeminal neuralgia causes brief, stabbing pain in the V2 or V3 distribution, triggered by light touch, chewing, or talking, with a normal exam. It is usually caused by a blood vessel (often the superior cerebellar artery) pressing on the trigeminal root. Carbamazepine or oxcarbazepine is first line; microvascular decompression is an option when drugs fail. A young patient, numbness on exam, or pain on both sides should prompt an MRI for multiple sclerosis or a tumor.",
      takeaway: "Seconds-long electric face pain triggered by touch or chewing = trigeminal neuralgia → carbamazepine."
    },
    {
      id: "q10",
      topic: "Basal ganglia & cerebellum",
      source: "Curriculum",
      stem: [
        "A 72-year-old woman with long-standing hypertension who smokes suddenly develops violent, flinging movements of her left arm and, to a lesser extent, her left leg. The movements are large, come from the shoulder and hip, and stop during sleep. Strength and sensation are normal."
      ],
      question: "A small infarct in which structure is most likely responsible?",
      choices: [
        { text: "Left subthalamic nucleus", why: "Basal ganglia lesions affect the opposite side of the body. A left subthalamic lesion would cause right-sided movements." },
        { text: "Right putamen", why: "Putamen lesions more often cause dystonia or parkinsonism. The classic lesion for hemiballismus is in the subthalamic nucleus." },
        { text: "Right subthalamic nucleus", why: "Correct. Losing the subthalamic nucleus removes the excitatory drive to the internal globus pallidus. With less inhibition of the thalamus, the opposite limbs make large, flinging movements." },
        { text: "Right substantia nigra pars compacta", why: "Losing these dopamine neurons causes parkinsonism (slowness, rigidity, rest tremor) on the opposite side, not excess movement." },
        { text: "Right dentate nucleus", why: "The dentate nucleus is in the cerebellum. Damage causes ataxia and intention tremor on the same (right) side." }
      ],
      answer: "C",
      explanation: "In the indirect pathway, the subthalamic nucleus uses glutamate to excite the internal globus pallidus, which in turn inhibits the thalamus. A small infarct in the subthalamic nucleus (often a lacune from hypertension) removes that brake, so the thalamus drives the motor cortex too much and the opposite limbs fling. It often improves over weeks.",
      takeaway: "Hemiballismus = lesion of the opposite subthalamic nucleus, often a lacunar infarct."
    },
    {
      id: "q11",
      topic: "Sleep",
      source: "Curriculum",
      stem: [
        "A 19-year-old college student falls asleep in every lecture, even though she sleeps 8 hours a night. Several times when laughing at a friend's joke, her knees have suddenly buckled and she has slumped to the floor for a few seconds while fully aware. She sometimes sees vivid figures in her room as she drifts off and occasionally wakes unable to move for a minute.",
        "A multiple sleep latency test shows that she falls asleep in an average of 4 minutes, with REM sleep in 3 of 5 naps."
      ],
      question: "Loss of which neurons best explains her condition?",
      choices: [
        { text: "Serotonergic neurons of the raphe nuclei", why: "Raphe neurons help regulate mood and sleep-wake states, but their loss isn't the cause of narcolepsy." },
        { text: "Orexin (hypocretin)-producing neurons of the lateral hypothalamus", why: "Correct. Orexin keeps wakefulness stable and holds back REM sleep. Losing these neurons lets REM features, like muscle atonia and dream imagery, break into wakefulness." },
        { text: "GABAergic neurons of the ventrolateral preoptic nucleus", why: "The ventrolateral preoptic nucleus promotes sleep. Losing it causes insomnia, not excessive sleepiness with cataplexy." },
        { text: "Melatonin-secreting cells of the pineal gland", why: "Melatonin helps time the circadian rhythm. Losing it doesn't cause cataplexy or REM at sleep onset." },
        { text: "Cholinergic neurons of the pons (pedunculopontine and laterodorsal tegmental nuclei)", why: "These neurons help generate REM sleep. Losing them would reduce REM, not cause REM to intrude into the day." }
      ],
      answer: "B",
      explanation: "Narcolepsy type 1 comes from autoimmune loss of orexin neurons in the lateral hypothalamus (strongly linked to HLA-DQB1*06:02), and CSF hypocretin is low. The classic tetrad: excessive daytime sleepiness, cataplexy (sudden loss of muscle tone triggered by emotion, especially laughter), hallucinations when falling asleep or waking, and sleep paralysis. The sleep test shows short sleep latency and REM within minutes of falling asleep. Treatment includes scheduled naps, modafinil, and sodium oxybate.",
      takeaway: "Sleepiness + cataplexy = narcolepsy type 1: loss of orexin (hypocretin) neurons in the lateral hypothalamus, with REM at sleep onset."
    },
    {
      id: "q12",
      topic: "Cortex, vision & behavior",
      source: "Curriculum",
      stem: [
        "A 59-year-old right-handed woman has a stroke. Her speech is fluent and grammatical, but she makes frequent sound errors, saying “spoot” for “spoon” and then trying several times to correct herself. She follows three-step commands and answers yes-or-no questions accurately.",
        "When asked to repeat the phrase “No ifs, ands, or buts,” she cannot do it, even after several attempts."
      ],
      question: "Damage to which structure best explains her language deficit?",
      choices: [
        { text: "Left inferior frontal gyrus", why: "This is Broca's area. Damage causes effortful, nonfluent speech with good comprehension. Her speech is fluent." },
        { text: "Left superior temporal gyrus", why: "This is Wernicke's area. Damage causes fluent but meaningless speech with poor comprehension. She follows complex commands." },
        { text: "Watershed areas surrounding the left perisylvian language areas", why: "Watershed infarcts cause transcortical aphasias, in which repetition is preserved. Her repetition is the main thing that fails." },
        { text: "Left arcuate fasciculus", why: "Correct. The arcuate fasciculus connects Wernicke's and Broca's areas. Damage leaves speech fluent and comprehension intact but makes repetition fail." },
        { text: "Right inferior frontal gyrus", why: "In a right-handed person, damage here affects the emotional tone of speech (aprosody), not language itself." }
      ],
      answer: "D",
      explanation: "To classify an aphasia, ask three questions: Is speech fluent? Is comprehension intact? Can the patient repeat? Fluent + good comprehension + poor repetition = conduction aphasia, from damage to the arcuate fasciculus (often with the supramarginal gyrus). Sound errors (phonemic paraphasias) with repeated attempts at self-correction are typical, because the patient knows what they want to say.",
      takeaway: "Fluent + understands + can't repeat = conduction aphasia (arcuate fasciculus). Preserved repetition = a transcortical aphasia."
    },
    {
      id: "q13",
      topic: "Spinal cord & motor tracts",
      source: "Step 1",
      stem: [
        "A 57-year-old man has 8 months of progressive weakness. It began with trouble turning keys with his right hand, and now he trips over his left foot. Examination shows wasting and twitching (fasciculations) of the small hand muscles and the tongue, brisk reflexes in all four limbs, stiff legs, and upgoing toes on both sides.",
        "Sensation, eye movements, and bladder control are normal."
      ],
      question: "Which of the following medications has been shown to modestly prolong survival in this condition?",
      choices: [
        { text: "Riluzole", why: "Correct. Riluzole reduces glutamate release and modestly prolongs survival in amyotrophic lateral sclerosis." },
        { text: "Pyridostigmine", why: "Pyridostigmine, an acetylcholinesterase inhibitor, treats myasthenia gravis. It doesn't change the course of motor neuron disease." },
        { text: "Intravenous immunoglobulin", why: "IVIG treats immune neuropathies such as Guillain-Barré syndrome and multifocal motor neuropathy. Those don't cause upper motor neuron signs like his." },
        { text: "Interferon beta", why: "Interferon beta is a disease-modifying therapy for multiple sclerosis." },
        { text: "Baclofen", why: "Baclofen, a GABA-B agonist, can ease spasticity, but it treats a symptom and doesn't prolong survival." }
      ],
      answer: "A",
      explanation: "Upper motor neuron signs (brisk reflexes, spasticity, Babinski) plus lower motor neuron signs (wasting, fasciculations) with normal sensation is amyotrophic lateral sclerosis. Eye movements and bladder control are usually spared. Most cases are sporadic; some familial cases come from SOD1 mutations. Riluzole lowers glutamate-driven excitotoxicity and adds a few months of survival; edaravone, an antioxidant, is also approved.",
      takeaway: "Upper + lower motor neuron signs with normal sensation = ALS. Riluzole (↓ glutamate release) modestly prolongs survival."
    },
    {
      id: "q14",
      topic: "Neurophysiology & pharmacology",
      source: "Curriculum",
      stem: [
        "A 7-year-old girl's teacher reports that she “zones out” many times a day. During these spells, she stops talking mid-sentence and stares while her eyelids flutter for about 10 seconds. Then she carries on as if nothing happened, without confusion. Asking her to breathe fast in the office brings on a spell.",
        "EEG shows generalized 3-per-second spike-and-wave discharges."
      ],
      question: "The first-line drug for this condition acts mainly on which target?",
      choices: [
        { text: "Voltage-gated Na⁺ channels, prolonging their inactivation", why: "This is how phenytoin and carbamazepine work. They don't help absence seizures and can make them worse." },
        { text: "GABA-A receptors, increasing how often the chloride channel opens", why: "This is how benzodiazepines work. They are used to stop prolonged seizures, not as first line for absence epilepsy." },
        { text: "Synaptic vesicle protein SV2A", why: "This is levetiracetam's target. It is used for many seizure types, but it isn't first line for childhood absence epilepsy." },
        { text: "L-type Ca²⁺ channels in heart and smooth muscle", why: "These are blocked by drugs like verapamil and amlodipine, which treat blood pressure and arrhythmias, not seizures." },
        { text: "T-type Ca²⁺ channels in thalamic neurons", why: "Correct. Ethosuximide blocks thalamic T-type Ca²⁺ channels, which drive the rhythmic firing behind absence seizures." }
      ],
      answer: "E",
      explanation: "Absence seizures come from a 3-per-second rhythm bouncing between the thalamus and cortex. T-type (low-threshold) Ca²⁺ channels in thalamic relay neurons let them fire in bursts that keep this rhythm going. Ethosuximide blocks these channels and is first line for childhood absence epilepsy. Valproate also works and is preferred when a child has other generalized seizure types too.",
      takeaway: "Absence seizures (3-Hz spike-and-wave, brought on by hyperventilation) → ethosuximide, which blocks thalamic T-type Ca²⁺ channels."
    },
    {
      id: "q15",
      topic: "Stroke & vascular",
      source: "Curriculum",
      stem: [
        "A 68-year-old man with poorly controlled hypertension wakes up with weakness of the left face, arm, and leg, all about equally weak. He has no sensory loss, no visual field cut, no neglect, and normal speech. His heart rhythm is regular.",
        "MRI shows a small (8-mm) infarct in the posterior limb of the right internal capsule."
      ],
      question: "Which of the following best describes the vessel involved and the most likely mechanism?",
      choices: [
        { text: "Superior division of the right middle cerebral artery, from an embolus from the heart", why: "A cortical stroke here would bring cortical signs such as left neglect, and his heart rhythm is regular." },
        { text: "Right anterior cerebral artery, from atherosclerotic thrombosis", why: "An ACA stroke weakens the leg much more than the arm and face." },
        { text: "Lenticulostriate branches of the right middle cerebral artery, from hypertensive small vessel disease", why: "Correct. These small penetrating arteries supply the internal capsule. Chronic hypertension thickens their walls (lipohyalinosis) and blocks them, causing small lacunar infarcts." },
        { text: "Right posterior cerebral artery, from an embolus from the vertebral artery", why: "A PCA stroke causes a visual field cut and sometimes thalamic sensory loss, not pure weakness." },
        { text: "Right internal carotid artery, from dissection", why: "Carotid dissection causes a large hemispheric stroke with cortical signs, often with neck pain and Horner syndrome." }
      ],
      answer: "C",
      explanation: "Equal weakness of the face, arm, and leg with no sensory, visual, or cortical findings is a pure motor lacunar stroke. All the motor fibers are bundled tightly in the posterior limb of the internal capsule, so a tiny infarct hits them all. Lacunes (under 15 mm) come from blockage of small penetrating arteries damaged by hypertension and diabetes. Other lacunar syndromes: pure sensory stroke (thalamus), ataxic hemiparesis, and dysarthria-clumsy hand.",
      takeaway: "Equal face-arm-leg weakness with no cortical signs = lacune in the internal capsule (lenticulostriate arteries, hypertension)."
    },
    {
      id: "q16",
      topic: "Brainstem & cranial nerves",
      source: "Curriculum",
      stem: [
        "A 31-year-old woman with multiple sclerosis develops double vision and weakness of the right side of her face over 2 days. Neither eye can look to the right, but both eyes move fully to the left, and convergence is normal. She cannot close her right eye tightly or wrinkle her right forehead.",
        "Hearing and facial sensation are normal."
      ],
      question: "A demyelinating plaque at which site best explains her findings?",
      choices: [
        { text: "Right abducens nerve in the cavernous sinus", why: "A right CN VI lesion would only stop the right eye from abducting; the left eye could still look right. It also wouldn't weaken the face." },
        { text: "Right dorsal pons at the facial colliculus", why: "Correct. The abducens nucleus controls gaze to that side for both eyes, and facial nerve fibers loop over it. A lesion here causes a rightward gaze palsy plus a right lower motor neuron facial palsy." },
        { text: "Right medial longitudinal fasciculus", why: "An MLF lesion causes internuclear ophthalmoplegia: the right eye fails to adduct on left gaze. Rightward gaze would be normal." },
        { text: "Left frontal eye field", why: "A frontal eye field lesion can impair voluntary gaze to the opposite side, but any facial weakness would be upper motor neuron, sparing the forehead. Her forehead is weak." },
        { text: "Right facial nerve in the internal acoustic meatus", why: "This would cause facial weakness and often hearing loss, but no gaze palsy." }
      ],
      answer: "B",
      explanation: "The abducens nucleus contains motor neurons for the same-side lateral rectus and interneurons that cross into the opposite MLF to drive the other eye's medial rectus. That's why a nuclear lesion causes a gaze palsy toward the lesion, not just weakness of one eye. Facial motor fibers loop around the abducens nucleus, forming the facial colliculus, so a dorsal pontine lesion here adds a same-side lower motor neuron facial palsy. Normal convergence shows the medial rectus and CN III are fine.",
      takeaway: "Abducens nucleus lesion = gaze palsy toward the lesion. Add a same-side lower motor neuron facial palsy = facial colliculus."
    },
    {
      id: "q17",
      topic: "Clinical neurology",
      source: "Curriculum",
      stem: [
        "A 34-year-old woman has had 3 months of double vision and drooping eyelids that get worse through the day. Lately she struggles to finish chewing a steak, and her voice turns nasal if she talks for a long time. Looking up for 60 seconds makes her right eyelid droop further.",
        "Her pupils are equal and react normally. Reflexes and sensation are normal."
      ],
      question: "Which of the following is the most likely underlying mechanism?",
      choices: [
        { text: "Antibodies against postsynaptic nicotinic acetylcholine receptors", why: "Correct. In myasthenia gravis, antibodies block and destroy acetylcholine receptors at the neuromuscular junction, so muscles tire with repeated use." },
        { text: "Antibodies against presynaptic voltage-gated calcium channels", why: "This is Lambert-Eaton syndrome: proximal limb weakness that improves briefly with effort, reduced reflexes, dry mouth, and often small cell lung cancer." },
        { text: "Botulinum toxin cleaving the proteins needed to release acetylcholine", why: "Botulism causes rapid, descending paralysis, often with dilated, poorly reactive pupils. It doesn't come and go over months." },
        { text: "Antibodies against gangliosides that damage peripheral nerve myelin", why: "This describes Guillain-Barré syndrome and its variants, which cause areflexia. Her reflexes are normal." },
        { text: "Degeneration of upper and lower motor neurons", why: "ALS causes progressive weakness with fasciculations and brisk reflexes. It doesn't fluctuate with use or cause ptosis." }
      ],
      answer: "A",
      explanation: "Myasthenia gravis causes fatigable weakness that gets worse with use and through the day, especially of the eye, face, and swallowing muscles. Pupils are spared because pupil muscles don't depend on nicotinic receptors. Most patients have AChR antibodies; some have MuSK antibodies. Repetitive nerve stimulation shows a decreasing response. Get a chest CT to look for a thymoma. Treatment includes pyridostigmine, immunosuppression, and often thymectomy.",
      takeaway: "Fatigable ptosis and diplopia with normal pupils = myasthenia gravis (anti-AChR). Look for a thymoma."
    },
    {
      id: "q18",
      topic: "Vestibular & coma exam",
      source: "Curriculum",
      stem: [
        "A 62-year-old man with untreated hypertension collapses and is unresponsive when paramedics arrive. Blood pressure is 220/120 mm Hg. His pupils are pinpoint but constrict slightly to bright light under magnification. Turning his head side to side produces no horizontal eye movement, but his eyes intermittently jerk quickly downward and then drift slowly back up. He extends his arms and legs in response to pain.",
        "Naloxone has no effect."
      ],
      question: "Where is the lesion most likely located?",
      choices: [
        { text: "Midbrain tegmentum", why: "Midbrain lesions cause midsized, fixed pupils and CN III palsies, not pinpoint pupils with absent horizontal eye movements." },
        { text: "Both cerebral hemispheres, from a metabolic cause", why: "In metabolic coma, pupils are usually normal-sized and reactive, and the brainstem's oculocephalic (doll's eye) reflex is intact." },
        { text: "Left thalamus", why: "Thalamic hemorrhage typically pushes the eyes down and in, with contralateral sensory loss and weakness. Horizontal oculocephalic reflexes are usually preserved." },
        { text: "Pons", why: "Correct. Pinpoint reactive pupils, absent horizontal eye movements, ocular bobbing, and extensor posturing point to the pons, classically a hypertensive pontine hemorrhage." },
        { text: "Medulla", why: "Medullary lesions cause breathing and blood pressure failure. Pupils and eye movements are usually preserved because their pathways lie higher." }
      ],
      answer: "D",
      explanation: "Localize coma by examining the pupils, eye movements, and motor responses. Pontine damage cuts the descending sympathetic fibers, leaving pinpoint pupils that still react because the parasympathetic pathway in the midbrain is intact. Damage to the pontine gaze center and abducens nuclei abolishes horizontal eye movements. Ocular bobbing (fast down, slow up) is classic for the pons. Extensor (decerebrate) posturing means the damage is below the red nucleus. Opioids also cause pinpoint pupils, which is why naloxone was tried.",
      takeaway: "Pinpoint reactive pupils + absent horizontal doll's eyes + ocular bobbing = pons (classically a hypertensive pontine hemorrhage)."
    },
    {
      id: "q19",
      topic: "Cortex, vision & behavior",
      source: "Step 1",
      stem: [
        "A 48-year-old man with alcohol use disorder is brought to the emergency department confused and unsteady. He doesn't know where he is or what day it is, walks with a wide, staggering gait, and has nystagmus with weakness of both lateral rectus muscles. His fingerstick glucose is 52 mg/dL, and the team is preparing to give intravenous dextrose."
      ],
      question: "Which of the following should be given before the dextrose?",
      choices: [
        { text: "Naloxone", why: "Naloxone reverses opioids. He has no pinpoint pupils or slowed breathing, and it wouldn't treat these eye and gait findings." },
        { text: "Vitamin B12", why: "B12 deficiency causes subacute combined degeneration and dementia over months, not acute confusion with eye muscle weakness." },
        { text: "Flumazenil", why: "Flumazenil reverses benzodiazepines and can trigger seizures in people dependent on alcohol or benzodiazepines." },
        { text: "Folate", why: "Folate is often low in alcohol use disorder, but it doesn't prevent or treat this syndrome." },
        { text: "Thiamine", why: "Correct. This is Wernicke encephalopathy from thiamine (B1) deficiency. Giving glucose first can use up the remaining thiamine and make it worse." }
      ],
      answer: "E",
      explanation: "Wernicke encephalopathy is the triad of confusion, ophthalmoplegia (often lateral rectus weakness and nystagmus), and ataxia, though many patients have only one or two. Thiamine is a cofactor for pyruvate dehydrogenase, α-ketoglutarate dehydrogenase, transketolase, and branched-chain ketoacid dehydrogenase. A glucose load increases demand for these enzymes, so giving dextrose without thiamine can precipitate or worsen it. The mammillary bodies, medial thalamus, and periaqueductal gray are damaged. Untreated, it can progress to Korsakoff syndrome: permanent memory loss with confabulation.",
      takeaway: "Confusion + ophthalmoplegia + ataxia in alcohol use disorder = Wernicke encephalopathy. Give thiamine before (or with) glucose."
    },
    {
      id: "q20",
      topic: "Spinal cord & motor tracts",
      source: "Curriculum",
      stem: [
        "A 70-year-old man undergoes open repair of a thoracoabdominal aortic aneurysm. When he wakes up, he can't move his legs and can't feel a pinprick or a cold object anywhere below his umbilicus. With his eyes closed, he can tell whether his toes are being moved up or down, and he feels a vibrating tuning fork at both ankles.",
        "He has urinary retention."
      ],
      question: "Which of the following best explains his findings?",
      choices: [
        { text: "Infarction in the territory of the posterior spinal arteries", why: "The posterior spinal arteries supply the dorsal columns. An infarct there would take away vibration and position sense, which he still has." },
        { text: "Compression of the cauda equina by a hematoma", why: "Cauda equina compression causes lower motor neuron weakness and saddle numbness in all sensory modalities, without a sensory level at the umbilicus." },
        { text: "Infarction in the territory of the anterior spinal artery", why: "Correct. The anterior spinal artery supplies the front two-thirds of the cord, including the corticospinal and spinothalamic tracts, but not the dorsal columns." },
        { text: "Hemisection of the thoracic spinal cord", why: "A hemisection (Brown-Séquard) would cause weakness and loss of position sense on one side, with pain and temperature loss on the other, not symmetric findings." },
        { text: "Dorsal column demyelination from vitamin B12 deficiency", why: "B12 deficiency develops over months and takes away vibration and position sense, the very senses he still has." }
      ],
      answer: "C",
      explanation: "Losing movement and pain and temperature sensation, with vibration and position sense spared, is anterior spinal artery syndrome. The anterior spinal artery supplies the anterior horns and the lateral corticospinal and spinothalamic tracts; the posterior spinal arteries supply the dorsal columns. In the lower thoracic cord, the anterior spinal artery depends on a single feeder, the artery of Adamkiewicz, which usually arises from the aorta between T9 and T12. Aortic surgery or clamping can cut off its flow. The umbilicus marks dermatome T10.",
      takeaway: "Lost motor and pain/temperature with spared vibration and position sense = anterior spinal artery infarct. Think aortic surgery and the artery of Adamkiewicz."
    },
    {
      id: "q21",
      topic: "Brainstem & cranial nerves",
      source: "Curriculum",
      stem: [
        "A 46-year-old woman has had 1 year of slowly worsening hearing in her left ear, with constant ringing. Over the past few months she has felt unsteady on her feet. The Weber test lateralizes to the right ear. Rinne testing shows air conduction better than bone conduction in both ears. Audiometry shows a left-sided sensorineural hearing loss with poor word recognition.",
        "MRI shows a 2.5-cm enhancing mass at the left cerebellopontine angle that extends into the internal acoustic meatus."
      ],
      question: "Which additional finding is most likely on examination?",
      choices: [
        { text: "Decreased left corneal reflex", why: "Correct. As a cerebellopontine angle mass grows past about 2 cm, it presses on the trigeminal nerve. Losing corneal sensation (the afferent limb, V1) is often the first sign of this." },
        { text: "Tongue deviation to the left", why: "CN XII exits far below, through the hypoglossal canal. A mass at the cerebellopontine angle doesn't reach it." },
        { text: "Right-sided hemiparesis", why: "Compression of the corticospinal tract would take a much larger tumor pushing hard on the brainstem. It would be a late finding." },
        { text: "Left ptosis with a dilated left pupil", why: "This is a CN III palsy, which comes from the midbrain or along the nerve's course near the uncus and posterior communicating artery, far from this mass." },
        { text: "Bitemporal hemianopia", why: "This comes from pressure on the optic chiasm, usually by a pituitary tumor or craniopharyngioma." }
      ],
      answer: "A",
      explanation: "One-sided sensorineural hearing loss with tinnitus and imbalance in an adult is a vestibular schwannoma until proven otherwise. It grows from the Schwann cells of the vestibular part of CN VIII at the cerebellopontine angle. It is S-100 positive and shows Antoni A areas with Verocay bodies and looser Antoni B areas. As it grows, it presses on CN V next (numbness, lost corneal reflex). CN VII sits right next to it but tolerates slow stretching surprisingly well, so facial weakness tends to come late. Very large tumors compress the cerebellum and the fourth ventricle. Tumors on both sides mean neurofibromatosis type 2 (NF2 gene on chromosome 22).",
      takeaway: "One-sided sensorineural hearing loss + tinnitus + imbalance = vestibular schwannoma. As it grows, it hits CN V next (lost corneal reflex). Both sides = NF2."
    },
    {
      id: "q22",
      topic: "Basal ganglia & cerebellum",
      source: "Step 1",
      stem: [
        "A 66-year-old man with Parkinson disease is started on levodopa alone. He develops severe nausea and lightheadedness on standing, and only a small fraction of each dose reaches his brain. His neurologist adds a second drug, which lets the levodopa dose be cut by about 75% and relieves his nausea."
      ],
      question: "This second drug works by inhibiting which enzyme?",
      choices: [
        { text: "Monoamine oxidase B in the brain", why: "Selegiline and rasagiline inhibit MAO-B to slow dopamine breakdown in the brain. They don't stop levodopa from being converted to dopamine in the bloodstream." },
        { text: "Catechol-O-methyltransferase in the periphery", why: "Entacapone inhibits COMT to lengthen each levodopa dose's effect. It doesn't block the conversion of levodopa to dopamine outside the brain, which causes the nausea and low blood pressure." },
        { text: "Tyrosine hydroxylase", why: "This enzyme makes L-DOPA from tyrosine. Inhibiting it (with metyrosine, used for pheochromocytoma) would lower dopamine further." },
        { text: "Aromatic L-amino acid (DOPA) decarboxylase outside the brain", why: "Correct. Carbidopa blocks DOPA decarboxylase but can't cross the blood-brain barrier, so it stops levodopa from becoming dopamine in the body while leaving conversion in the brain intact." },
        { text: "Dopamine β-hydroxylase", why: "This enzyme turns dopamine into norepinephrine. Blocking it wouldn't increase the levodopa reaching the brain." }
      ],
      answer: "D",
      explanation: "Levodopa crosses the blood-brain barrier on the large neutral amino acid transporter, so protein-rich meals can compete with it. Dopamine itself can't cross. Without carbidopa, most levodopa is turned into dopamine in the body, causing nausea (the vomiting center, area postrema, lies outside the barrier), orthostatic hypotension, and arrhythmias. Carbidopa stays outside the brain and blocks that conversion, so more levodopa reaches the brain at a much smaller dose.",
      takeaway: "Carbidopa blocks DOPA decarboxylase outside the brain (it can't cross the blood-brain barrier): more levodopa reaches the brain, with less nausea."
    },
    {
      id: "q23",
      topic: "Neurophysiology & pharmacology",
      source: "Curriculum",
      stem: [
        "A 40-year-old farmer who hasn't had a tetanus booster in decades stepped on a rusty nail 10 days ago. He now has jaw stiffness and can't open his mouth fully, a fixed grimace, and painful spasms of his back and neck muscles that arch his back. Loud noises set off the spasms. He is fully alert."
      ],
      question: "Which of the following best describes how the responsible toxin works?",
      choices: [
        { text: "It blocks acetylcholine release at the neuromuscular junction", why: "This is botulinum toxin, which causes flaccid, not spastic, paralysis." },
        { text: "It blocks release of glycine and GABA from inhibitory interneurons in the spinal cord", why: "Correct. Tetanus toxin travels back up motor axons to the spinal cord and stops inhibitory interneurons (such as Renshaw cells) from releasing glycine and GABA. Motor neurons fire unchecked, causing rigidity and spasms." },
        { text: "It binds and blocks glycine receptors on motor neurons", why: "This is strychnine poisoning. It looks similar clinically, but strychnine blocks the receptor, while tetanus toxin blocks the release." },
        { text: "It inhibits acetylcholinesterase at the neuromuscular junction", why: "This is organophosphate poisoning: secretions (salivation, tearing, diarrhea), small pupils, a slow heart rate, and twitching that progresses to weakness." },
        { text: "It blocks voltage-gated sodium channels in nerves", why: "This is tetrodotoxin (pufferfish), which causes numbness and flaccid paralysis." }
      ],
      answer: "B",
      explanation: "Clostridium tetani makes tetanospasmin at the wound. The toxin enters motor nerve terminals, travels backward up the axon to the spinal cord, and crosses into inhibitory interneurons. There it cleaves synaptobrevin, a SNARE protein, so glycine and GABA can't be released. Without inhibition, motor neurons fire freely: lockjaw (trismus), a fixed grin (risus sardonicus), back arching (opisthotonos), and spasms set off by stimuli. Botulinum toxin also cleaves SNARE proteins, but at the neuromuscular junction, so it causes flaccid paralysis. Treatment includes tetanus immune globulin, vaccine, wound care, metronidazole, and benzodiazepines.",
      takeaway: "Tetanus toxin blocks glycine and GABA release from spinal inhibitory interneurons → spastic paralysis. Botulinum blocks acetylcholine release → flaccid paralysis."
    },
    {
      id: "q24",
      topic: "Clinical neurology",
      source: "Curriculum",
      stem: [
        "A 73-year-old man has had 1 year of cognitive decline. His wife says his alertness varies from day to day: some days he seems nearly normal, and on others he stares into space for long periods. He describes seeing small children and animals in the house that aren't there. For years before the memory problems began, he punched and kicked while dreaming.",
        "Examination shows mild slowness and rigidity. During a recent hospital stay, he became severely rigid and confused after a dose of haloperidol."
      ],
      question: "Which of the following would most likely be found in his cortical neurons at autopsy?",
      choices: [
        { text: "Extracellular β-amyloid plaques and intracellular tangles of hyperphosphorylated tau", why: "This is Alzheimer disease, which starts with memory loss and progresses steadily. It doesn't typically cause early hallucinations, fluctuations, and parkinsonism." },
        { text: "Round tau inclusions (Pick bodies) in frontal and temporal neurons", why: "This is frontotemporal dementia, which begins with personality and behavior changes or language problems." },
        { text: "Intranuclear inclusions of mutant huntingtin protein", why: "This is Huntington disease, which causes chorea and psychiatric symptoms in mid-adulthood, with a family history." },
        { text: "Misfolded prion protein causing spongiform change", why: "This is Creutzfeldt-Jakob disease, which causes dementia over weeks to months with startle myoclonus." },
        { text: "Intracytoplasmic eosinophilic inclusions of α-synuclein", why: "Correct. These are Lewy bodies. Dementia with Lewy bodies causes fluctuating attention, vivid visual hallucinations, parkinsonism, and REM sleep behavior disorder." }
      ],
      answer: "E",
      explanation: "Dementia with Lewy bodies has four core features: fluctuating cognition, recurrent well-formed visual hallucinations, REM sleep behavior disorder (acting out dreams), and parkinsonism. Severe sensitivity to antipsychotics is a key warning sign, so avoid haloperidol. The one-year rule separates it from Parkinson disease dementia: in dementia with Lewy bodies, cognitive problems start before or within a year of the parkinsonism. Cholinesterase inhibitors such as rivastigmine help.",
      takeaway: "Fluctuations + visual hallucinations + parkinsonism + REM behavior disorder = dementia with Lewy bodies (α-synuclein). Avoid antipsychotics."
    },
    {
      id: "q25",
      topic: "Basal ganglia & cerebellum",
      source: "Curriculum",
      stem: [
        "A 64-year-old man suddenly becomes dizzy and clumsy. When he reaches for a cup with his right hand, he overshoots it, and a coarse tremor develops that worsens as his hand nears the cup. He can't rapidly alternate between tapping his right palm and the back of his right hand on his thigh. When walking, he veers and tends to fall toward the right.",
        "Strength and sensation are normal, and his left arm and leg are coordinated."
      ],
      question: "A lesion in which location best explains these findings?",
      choices: [
        { text: "Left cerebellar hemisphere", why: "Each cerebellar hemisphere coordinates the limbs on the same side of the body. A left-sided lesion would make the left limbs clumsy." },
        { text: "Anterior superior cerebellar vermis", why: "The vermis controls the trunk and gait. Damage causes a wide-based, unsteady walk, but limb coordination is mostly preserved." },
        { text: "Right cerebellar hemisphere", why: "Correct. A lesion here causes clumsiness of the right limbs: overshooting (dysmetria), intention tremor, and trouble with rapid alternating movements. Patients tend to fall toward the side of the lesion." },
        { text: "Flocculonodular lobe", why: "This part of the cerebellum handles balance and eye movements. Damage causes nystagmus and trunk imbalance without limb clumsiness." },
        { text: "Right dorsal columns of the cervical cord", why: "Losing position sense causes a clumsiness that worsens with the eyes closed, but his sensation is normal." }
      ],
      answer: "C",
      explanation: "The cerebellar hemispheres coordinate the limbs on the same side. The pathway crosses twice: the dentate nucleus projects through the superior cerebellar peduncle to the opposite thalamus and motor cortex, and the corticospinal tract crosses back. So a cerebellar lesion shows up on the same side of the body. Signs include dysmetria, intention tremor, dysdiadochokinesia, and falling toward the lesion. Midline (vermis) lesions affect the trunk and gait instead.",
      takeaway: "A cerebellar hemisphere lesion makes the limbs on the same side clumsy (dysmetria, intention tremor, dysdiadochokinesia), and patients fall toward the lesion."
    },
    {
      id: "q26",
      topic: "Stroke & vascular",
      source: "Curriculum",
      stem: [
        "A 70-year-old right-handed woman with atrial fibrillation suddenly can't speak normally. She produces only a few effortful words (“Water… want… water”) and becomes visibly frustrated. She follows commands correctly and points to objects the examiner names.",
        "Her right face and arm are weak, and her right leg is only mildly weak. Visual fields are full."
      ],
      question: "Occlusion of which vessel best explains her presentation?",
      choices: [
        { text: "Superior division of the left middle cerebral artery", why: "Correct. This branch supplies Broca's area and the face and arm part of the motor strip, causing nonfluent aphasia with right face and arm weakness." },
        { text: "Inferior division of the left middle cerebral artery", why: "This supplies Wernicke's area and the temporal lobe, causing fluent speech with poor comprehension and often a field cut, with little weakness." },
        { text: "Left anterior cerebral artery", why: "The ACA supplies the leg area of the motor strip, so the leg would be weaker than the arm and face." },
        { text: "Left posterior cerebral artery", why: "The PCA causes a right hemianopia and sometimes trouble reading, not nonfluent aphasia with arm weakness." },
        { text: "Lenticulostriate branches of the left middle cerebral artery", why: "A small deep (lacunar) infarct causes weakness without cortical signs like aphasia." }
      ],
      answer: "A",
      explanation: "The superior division of the MCA supplies the lateral frontal lobe, including Broca's area (inferior frontal gyrus) and the face and arm parts of the precentral gyrus. Broca aphasia is effortful, telegraphic, and nonfluent, with good comprehension and poor repetition. Patients know their speech is wrong, so frustration is common. In atrial fibrillation, an embolus to an MCA branch is the classic mechanism.",
      takeaway: "Nonfluent aphasia + right face and arm weakness more than leg = left MCA superior division (Broca's area + motor strip)."
    },
    {
      id: "q27",
      topic: "Clinical neurology",
      source: "Step 1",
      stem: [
        "A 28-year-old man has 5 days of tingling in his feet, followed by weakness that has climbed from his legs into his arms. Two weeks ago he had several days of bloody diarrhea after a barbecue. He now can't stand without help.",
        "Examination shows symmetric weakness, worse in the legs, absent reflexes throughout, and mild weakness of both sides of his face. His heart rate swings between 50 and 130/min."
      ],
      question: "Which cerebrospinal fluid finding is most likely?",
      choices: [
        { text: "High opening pressure, many neutrophils, and low glucose", why: "This is bacterial meningitis, which causes fever, a stiff neck, and confusion, not ascending weakness." },
        { text: "Oligoclonal IgG bands that are not present in serum", why: "These suggest antibodies made within the CNS, as in multiple sclerosis. They aren't typical of Guillain-Barré syndrome." },
        { text: "Many lymphocytes with normal protein", why: "This pattern fits viral meningitis. Guillain-Barré typically has few or no cells." },
        { text: "High protein with a normal cell count", why: "Correct. This is called albuminocytologic dissociation and is the classic CSF finding in Guillain-Barré syndrome, often appearing after the first week." },
        { text: "Positive 14-3-3 protein and RT-QuIC test", why: "These markers support Creutzfeldt-Jakob disease, a rapidly progressive dementia." }
      ],
      answer: "D",
      explanation: "Guillain-Barré syndrome causes ascending, symmetric weakness with lost reflexes, often after an infection; Campylobacter jejuni (from undercooked poultry) is the classic trigger. Antibodies made against the bacteria cross-react with nerve gangliosides and myelin (molecular mimicry). Autonomic instability and facial weakness are common. CSF protein is high but cells are normal. Monitor breathing closely (forced vital capacity), since respiratory failure can come quickly. Treat with IVIG or plasma exchange; steroids don't help.",
      takeaway: "Ascending weakness + lost reflexes after Campylobacter = Guillain-Barré. CSF: high protein, normal cells. Watch the breathing."
    },
    {
      id: "q28",
      topic: "Cortex, vision & behavior",
      source: "Curriculum",
      stem: [
        "A 76-year-old man has a large stroke in the right middle cerebral artery territory. His head and both eyes are turned to the right, and he doesn't look to the left when asked. When the examiner quickly rotates his head to the right, both eyes move fully to the left.",
        "He has weakness of the left face and arm."
      ],
      question: "Damage to which area best explains his inability to look voluntarily to the left?",
      choices: [
        { text: "Left frontal eye field", why: "The left frontal eye field drives gaze to the right. Damage to it would push the eyes to the left." },
        { text: "Right abducens nucleus", why: "Damage here would prevent gaze to the right, not the left, and the doll's eye maneuver couldn't overcome it." },
        { text: "Right paramedian pontine reticular formation", why: "This pontine gaze center drives gaze to the right. A lesion here would cause a rightward gaze palsy that head turning can't overcome." },
        { text: "Left medial longitudinal fasciculus", why: "An MLF lesion causes internuclear ophthalmoplegia (the left eye doesn't adduct on right gaze). It doesn't turn both eyes to one side." },
        { text: "Right frontal eye field", why: "Correct. The right frontal eye field drives voluntary gaze to the left. When it is destroyed, the healthy left frontal eye field pushes the eyes to the right, toward the lesion." }
      ],
      answer: "E",
      explanation: "Each frontal eye field (Brodmann area 8) drives the eyes toward the opposite side. A destructive hemispheric lesion lets the healthy side win, so the eyes look toward the lesion and away from the weak side. Because the brainstem gaze centers are intact, the doll's eye maneuver can still move the eyes fully. In contrast, a seizure focus drives the eyes away from the lesion, and a pontine gaze center lesion makes the eyes look away from the lesion and toward the weak side.",
      takeaway: "Hemispheric stroke: the eyes look toward the lesion, away from the weak side. Pontine lesion or seizure: the eyes look away from the lesion."
    },
    {
      id: "q29",
      topic: "Spinal cord & motor tracts",
      source: "Curriculum",
      stem: [
        "A 26-year-old woman notices that she has burned her hands several times while cooking without feeling it. Examination shows loss of pain and temperature sensation over both shoulders, the backs of the arms, and the hands, in a cape-like pattern. Light touch, vibration, and position sense are normal. The small muscles of both hands are wasted, and both biceps reflexes are absent.",
        "Brain MRI shows the cerebellar tonsils extending 8 mm below the foramen magnum."
      ],
      question: "Damage to which structure causes her loss of pain and temperature sensation?",
      choices: [
        { text: "Dorsal root ganglia at C5–T1", why: "Dorsal root ganglion damage would remove all sensory types in those dermatomes, including touch and vibration, which she still has." },
        { text: "Ventral white commissure of the cervical cord", why: "Correct. Pain and temperature fibers cross in the ventral white commissure, just in front of the central canal. An expanding fluid-filled cavity (syrinx) damages these crossing fibers first, on both sides." },
        { text: "Lateral spinothalamic tracts on both sides", why: "Damage to these tracts would cause pain and temperature loss everywhere below the lesion, including the legs. Hers is limited to a band over the arms and shoulders." },
        { text: "Fasciculus cuneatus on both sides", why: "These dorsal column tracts carry vibration and position sense from the arms, which are normal." },
        { text: "Anterior horn cells at C8–T1", why: "Anterior horn damage explains her hand wasting and lost reflexes, but anterior horn cells are motor, so they don't explain the sensory loss." }
      ],
      answer: "B",
      explanation: "Syringomyelia is a fluid-filled cavity in the central cord, often with a Chiari I malformation (cerebellar tonsils herniating more than 5 mm below the foramen magnum). As it expands, it first cuts the pain and temperature fibers crossing in the ventral white commissure. This causes loss of pain and temperature over the affected segments on both sides (a cape), with touch, vibration, and position sense spared. Further expansion damages the anterior horns (hand wasting, lost reflexes at that level) and then the lateral corticospinal tracts (spasticity below).",
      takeaway: "Cape-like loss of pain and temperature with intact touch and vibration = syringomyelia (ventral white commissure). Think Chiari I."
    },
    {
      id: "q30",
      topic: "Brainstem & cranial nerves",
      source: "Curriculum",
      stem: [
        "A 15-year-old boy has had 2 months of morning headaches and vomiting. On examination he can't look up, whether asked to or following a target. His pupils are midsized and react poorly to light but constrict briskly when he focuses on a nearby object. When he tries to look up, his eyes jerk back into the sockets and turn inward. Funduscopy shows swelling of both optic discs.",
        "MRI shows a mass just behind the third ventricle that is compressing the cerebral aqueduct, with enlarged ventricles."
      ],
      question: "Pressure on which structure best explains his eye findings?",
      choices: [
        { text: "Optic chiasm", why: "Chiasm compression, usually from a pituitary tumor or craniopharyngioma, causes bitemporal hemianopia, not an upgaze palsy." },
        { text: "Ventral pons", why: "Ventral pontine damage causes locked-in syndrome: quadriplegia with only vertical eye movements preserved." },
        { text: "Dorsal midbrain at the level of the superior colliculus", why: "Correct. A pineal region mass presses on the pretectal area and posterior commissure, causing Parinaud syndrome: upgaze palsy, pupils that react to near but not to light, and convergence-retraction nystagmus." },
        { text: "Cerebellar vermis", why: "Vermis compression causes trunk and gait ataxia (as with medulloblastoma), not a vertical gaze palsy." },
        { text: "Both abducens nerves", why: "High intracranial pressure can stretch both CN VI nerves, causing horizontal double vision, but not an upgaze palsy or these pupil findings." }
      ],
      answer: "C",
      explanation: "Parinaud (dorsal midbrain) syndrome: upgaze palsy, light-near dissociation of the pupils, convergence-retraction nystagmus, and often eyelid retraction. A pineal region tumor is the classic cause; in an adolescent boy, germinoma is most common, and some secrete β-hCG, which can cause early puberty. The same mass blocks the cerebral aqueduct, causing obstructive hydrocephalus, with morning headaches, vomiting, and papilledema.",
      takeaway: "Can't look up + pupils react to near but not light + convergence-retraction nystagmus = Parinaud syndrome (dorsal midbrain). In a teen boy, think pineal germinoma."
    }
  ]
};
