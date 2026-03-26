const questions = [
	{
	question: "Was bedeutet Social Engineering?",
	options: ["Ausnutzen von Sicherheitslücken in Software", "Manipulation von Menschen zur Preisgabe von Informationen", "Verschlüsselung von Daten", "Automatisches Hacken von Systemen"],
	correct: [1],
	explanation: "Social Engineering nutzt psychologische Tricks, um Menschen dazu zu bringen, sensible Informationen freiwillig preiszugeben."
	},
	{
	question: "Was wollen Angreifer erreichen?",
	options: ["Zugriff auf sensible Daten erhalten", "Systeme schneller machen", "Benutzer unterstützen", "Netzwerke testen"],
	correct: [0],
	explanation: "Angreifer wollen an Passwörter, Bankdaten oder geschützte Daten gelangen, nicht Technik hacken."
	},
	{
	question: "Was ist Phishing?",
	options: ["Abfangen von WLAN-Signalen", "Physischer Zugriff auf Computer", "Täuschung durch gefälschte Nachrichten oder Webseiten", "Installation von Softwareupdates"],
	correct: [2],
	explanation: "Phishing benutzt gefälschte E-Mails oder Webseiten, um Nutzer zu täuschen."
	},
	{
	question: "Was wollen Angreifer erreichen?",
	options: ["Massenhafte Spam-Nachrichten", "Zufällige Passwortversuche", "Automatisierte Virensuche", "Gezielter Angriff auf eine bestimmte Person oder Firma"],
	correct: [3],
	explanation: "Im Gegensatz zu Massen-Phishing ist Spear-Phishing auf bestimmte Personen oder Firmen zugeschnitten."
	},
	{
	question: "Was bedeutet Pretexting?",
	options: ["Vortäuschen einer falschen Identität oder Geschichte", "Erraten von Passwörtern", "Ausnutzen technischer Schwachstellen", "Verschlüsseln von Daten"],
	correct: [0],
	explanation: "Der Angreifer erfindet eine Rolle (z.B. IT-Support), um Informationen zu bekommen."
	},
	{
	question: "Was nutzt Baiting aus?",
	options: ["Technische Fehler", "Neugier oder Gier des Opfers", "Schwache Passwörter", "Langsame Systeme"],
	correct: [1],
	explanation: "Bei Baiting wird z.B. ein „kostenloser USB-Stick“ oder Download genutzt, um Nutzer zu ködern."
	},
	{
	question: "Was ist Vishing?",
	options: ["Angriff über soziale Netzwerke", "Angriff über USB-Geräte", "Angriff über WLAN", "Betrug über Telefonanrufe"],
	correct: [3],
	explanation: "Beim Vishing versucht der Angreifer am Telefon an vertrauliche Informationen zu gelangen."
	},
	{
	question: "Was ist Smishing?",
	options: ["Betrug über SMS oder Messenger-Nachrichten", "Angriff über E-Mails", "Telefonbetrug", "Physischer Zugriff"],
	correct: [0],
	explanation: "Smishing nutzt Textnachrichten auf dem Handy, um Nutzer zur Preisgabe von Daten zu bringen."
	},
	{
	question: "Was bedeutet Tailgating?",
	options: ["Zugriff auf Datenbanken", "Abfangen von Passwörtern", "Unbefugtes Mitgehen in gesicherte Bereiche", "Überwachung von Netzwerken"],
	correct: [2],
	explanation: "Hier folgt jemand einer berechtigten Person, um in gesicherte Räume zu gelangen."
	},
	{
	question: "Was ist Shoulder Surfing?",
	options: ["Hacken über WLAN", "Beobachten beim Eingeben von vertraulichen Daten", "Abfangen von E-Mails", "Installieren von Schadsoftware"],
	correct: [1],
	explanation: "Angreifer schauen z.B. über die Schulter, um Passwörter oder PINs zu stehlen."
	},
    {
	question: "Warum funktioniert Social Engineering oft?",
	options: ["Software ist unsicher", "Firewalls können solche Angriffe nicht erkennen", "Hardware ist veraltet", "Menschen handeln vertrauensvoll oder unachtsam"],
	correct: [3],
	explanation: "Technische Systeme sind oft sicher, aber Menschen reagieren impulsiv oder vertrauensvoll."
	},
    {
	question: "Welcher Trick wird häufig genutzt?",
	options: ["Verschlüsselung umgehen", "Programme neu schreiben", "Vertrauen oder Autorität vortäuschen", "Hardware manipulieren"],
	correct: [2],
	explanation: "Angreifer geben sich z.B. als Chef oder IT-Support aus, um Informationen zu erhalten."
	},
    {
	question: "Welche Emotion wird besonders häufig ausgenutzt?",
	options: ["Angst", "Entspannung", "Zufriedenheit", "Freude"],
	correct: [0],
	explanation: "Angst, Stress oder Druck lassen Menschen Fehler machen und Daten preisgeben."
	},
    {
	question: "Warum wird Zeitdruck eingesetzt?",
	options: ["Um Prozesse zu beschleunigen", "Um Systeme zu testen", "Um Kommunikation zu verbessern", "Um kritisches Denken zu reduzieren"],
	correct: [3],
	explanation: "Wenn Menschen schnell handeln müssen, denken sie weniger nach und fallen eher auf Tricks herein."
	},
    {
	question: "Was ist die „Chef-Masche“?",
	options: ["Täuschung durch angebliche Autoritätsperson", "Angriff auf Server", "Nutzung von Schadsoftware", "Fehler im System"],
	correct: [0],
	explanation: "Angreifer geben sich als Vorgesetzte aus, um Mitarbeiter zur Herausgabe von Informationen zu bringen."
	},
    {
	question: "Was ist ein typisches Anzeichen für Phishing?",
	options: ["Normale Sprache", "Unerwartete Aufforderung zur Dateneingabe", "Bekannter Absender", "Professionelles Design"],
	correct: [1],
	explanation: "Seriöse Unternehmen fragen selten per E-Mail direkt nach Passwörtern oder Kontodaten."
	},
    {
	question: "Warum sind fremde USB-Sticks riskant?",
	options: ["Sie sind oft beschädigt", "Sie funktionieren nicht", "Sie sind langsam", "Sie können Schadsoftware enthalten"],
	correct: [3],
	explanation: "Angreifer verteilen z.B. USB-Sticks mit Viren, die beim Einstecken Systeme infizieren."
	},
    {
	question: "Was ist eine mögliche Folge eines Phishing-Angriffs?",
	options: ["Schnellere Internetverbindung", "Verbesserung der Sicherheit", "Diebstahl von Zugangsdaten", "Automatische Updates"],
	correct: [2],
	explanation: "Wer auf einen Phishing-Link klickt, kann sensible Informationen wie Passwörter verlieren."
	},
    {
	question: "Was ist das Ziel des IT-Support-Tricks?",
	options: ["Zugang zu vertraulichen Informationen erhalten", "Software installieren", "Systeme reparieren", "Hardware austauschen"],
	correct: [0],
	explanation: "Der Angreifer gibt vor zu helfen, um vertrauliche Daten wie Passwörter zu bekommen."
	},
    {
	question: "Warum ist Social Media relevant für Angreifer?",
	options: ["Wegen Werbung", "Wegen der Plattformgeschwindigkeit", "Wegen verfügbarer persönlicher Informationen", "Wegen technischer Fehler"],
	correct: [2],
	explanation: "Auf Plattformen finden Angreifer Daten über Nutzer, die für Social Engineering genutzt werden können."
	},
    {
	question: "Welche Maßnahme hilft am besten?",
	options: ["Schnelles Reagieren", "Kritisches Prüfen von Anfragen", "Häufiges Teilen von Daten", "Nutzung öffentlicher Netzwerke"],
	correct: [1],
	explanation: "Wer Anfragen hinterfragt, kann sich vor vielen Social-Engineering-Angriffen schützen."
	},
    {
	question: "Was beschreibt Zwei-Faktor-Authentifizierung am besten?",
	options: ["Kombination aus zwei unabhängigen Sicherheitsfaktoren", "Nutzung von zwei Geräten", "Doppelte Speicherung von Daten", "Zwei Passwörter gleichzeitig"],
	correct: [0],
	explanation: "2FA schützt Accounts besser, weil zusätzlich zum Passwort noch ein zweites Element benötigt wird."
	},
    {
	question: "Wie sollte man auf eine verdächtige Anfrage reagieren?",
	options: ["Identität überprüfen", "Direkt handeln", "Anfrage ignorieren", "Daten weitergeben"],
	correct: [0],
	explanation: "Prüfen, ob die Anfrage echt ist, verhindert, dass man Daten unabsichtlich preisgibt."
	},
    {
	question: "Warum sind Schulungen wichtig?",
	options: ["Sie verbessern Technik", "Sie beschleunigen Prozesse", "Sie sparen Kosten", "Sie erhöhen das Sicherheitsbewusstsein"],
	correct: [3],
	explanation: "Schulungen zeigen, wie Social Engineering funktioniert und wie man sich schützt."
	},
    {
	question: "Welche Rolle spielt gesunder Menschenverstand?",
	options: ["Keine", "Nur bei Experten nötig", "Wichtige Schutzmaßnahme", "Nur bei Technik relevant"],
	correct: [2],
	explanation: "Wer misstrauisch ist und logisch denkt, erkennt viele Angriffe frühzeitig."
	},
    {
	question: "Wer kann Opfer werden?",
	options: ["Jeder, unabhängig von Wissen", "Nur Anfänger", "Nur ältere Menschen", "Nur Firmen"],
	correct: [0],
	explanation: "Auch erfahrene Personen können manipuliert werden, wenn Tricks gut gemacht sind."
	},
    {
	question: "Was zeigen reale Angriffe?",
	options: ["Technik ist irrelevant", "Angriffe sind selten", "Systeme sind unsicher", "Menschen sind oft das schwächste Glied"],
	correct: [3],
	explanation: "Studien zeigen: Angriffe scheitern selten an Technik, sondern an menschlichem Verhalten."
	},
    {
	question: "Wie beeinflusst KI Social Engineering?",
	options: ["Sie verhindert Angriffe", "Sie reduziert Risiken", "Sie macht Angriffe glaubwürdiger", "Sie hat keinen Einfluss"],
	correct: [2],
	explanation: "KI kann überzeugende Nachrichten oder Stimmen erzeugen, die Menschen leichter täuschen."
	},
    {
	question: "Wo kommt Social Engineering vor?",
	options: ["Nur im Internet", "Auch im Alltag und persönlich", "Nur in Unternehmen", "Nur in sozialen Medien"],
	correct: [1],
	explanation: "Es gibt nicht nur Online-Angriffe – z.B. Telefonbetrug oder Manipulation im Büro."
	},
    {
	question: "Was ist die größte Gefahr?",
	options: ["Technik allein", "Menschliches Verhalten", "Softwarefehler", "Hardwareprobleme"],
	correct: [1],
	explanation: "Technik kann geschützt werden, aber Menschen reagieren oft impulsiv und werden so zum Risiko."
	},
];
