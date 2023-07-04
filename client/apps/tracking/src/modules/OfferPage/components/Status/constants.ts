export enum DateType {
  complete = "complete",
  tender = "tender",
  finalize = "finalize",
  vot_koordinierung = "vot_koordinierung",
  vot_dokumentation = "vot_dokumentation",
  beauftragung = "beauftragung",
  koordinierung = "koordinierung",
  montage = "montage",
  inbetriebnahme = "inbetriebnahme",
  zaehlersetzung = "zaehlersetzung",
}
export type TimeLineData = {
  type: DateType;
  description?: string;
  descriptionPresent: (...args: Array<string>) => string;
  descriptionPast: (...args: Array<string>) => string;
  disabled: boolean;
  lastItem?: boolean;
  date?: Date;
  current?: boolean;
  finalItem?: boolean;
};

export const timeLineDataInit: Array<TimeLineData> = [
  {
    type: DateType.finalize,
    descriptionPresent: () => `
    Ihre persönliche Energiewende ist abgeschlossen! Laut unseren Unterlagen ist Ihre PV Anlage nun Ordnugnsgemäß am Netz und produziert Ihren eigenen Strom aus 100% erneuerbaren Energien. Wir bedanken uns herzlich bei Ihnen für Ihr Vertrauen und wünschen Ihnen weiterhin alles Gute.
    Waren Sie mit uns zufrieden? Dann würden wir uns freuen wenn Sie uns weiterempfehlen und uns bei Google entsprechend bewerten!
    `,
    descriptionPast: () => ``,
    disabled: true,
    finalItem: true,
  },
  {
    type: DateType.zaehlersetzung,
    descriptionPresent: () =>
      `Unser Projektmanager wird Ihnen eine E-Mail zuschicken, die Ihnen dabei hilft, Ihre PV-Anlage beim Marktstammdatenregister anzumelden. Bitte melden Sie Ihre PV-Anlage beim Marktstammdatenregister an und senden Sie den Nachweis an unseren Projektmanager zurück. Unser Netzanmeldungsteam wird dann die Fertigstellung Ihrer PV-Anlage melden. Anschließend erhalten Sie die Schlussrechnung. Zuletzt wird der Termin zur Zählersetzung vereinbart und durchgeführt.`,
    descriptionPast: () =>
      `Unser Projektmanager hat Ihnen eine E-Mail zugesendet, die Ihnen dabei hilft, Ihre PV-Anlage beim Marktstammdatenregister anzumelden. Sie haben Ihre Anlage dort angemeldet und uns den Nachweis an unseren Projektmanager zurückgesendet. Unser Netzanmeldungsteam hat die Fertigstellung Ihrer Anlage gemeldet. Der Termin zur Zählersezung wurde vereinbart und durchgeführt. Wir wünschen Ihnen viel Freude und eine Menge sonnige Tage mit Ihrer PV-Anlage.`,
    disabled: true,
  },
  {
    type: DateType.inbetriebnahme,
    descriptionPresent: () =>
      `Wir werden Sie telefonisch kontaktieren, um einen Termin zum Gerüstabbau und ggf. einen AC-Installationstermin zu vereinbaren.`,
    descriptionPast: () =>
      `Wir haben mit Ihnen telefonisch einen Termin zum Gerüstabbau und ggf. einen AC-Installationstermin vereinbart.`,
    disabled: true,
  },
  {
    type: DateType.montage,
    descriptionPresent: () =>
      `Das Gerüst wird zur Montage aufgebaut. Anschließend werden unsere Monteure mit der Montage beginnen. Weitere Informationen finden Sie unter dem Abschnitt "Termine".`,
    descriptionPast: () =>
      `Das Gerüst wurde aufgebaut. Anschließend haben unsere Monteure die Montage Ihrer Anlage durchgeführt.`,
    disabled: true,
  },
  {
    type: DateType.koordinierung,
    descriptionPresent: () =>
      `Unser Projektmanager wird mit Ihnen telefonisch einen Termin für die Errichtung Ihrer PV-Anlage vereinbaren.`,
    descriptionPast: () =>
      `Unser Projektmanager hat mit Ihnen telefonisch einen Termin für die Errichtung Ihrer PV-Anlage vereinbart. Weitere Informationen finden Sie unter dem Abschnitt "Termine".`,
    disabled: true,
  },
  {
    type: DateType.beauftragung,
    descriptionPresent: () =>
      `Wir bereiten nun alle Informationen Ihres Projektes auf und besprechen die Anlieferung der benötigten Komponenten mit Ihrem Anbieter.`,
    descriptionPast: () =>
      `Wir haben nun alle Informationen Ihres Projektes aufbereitet und haben die Anlieferung der benötigten Komponenten mit Ihrem Anbieter besprochen.`,
    disabled: true,
  },
  {
    type: DateType.vot_dokumentation,
    descriptionPresent: () =>
      `Der mit Ihnen vereinbarte Vor-Ort-Termin findet demnächst statt. Weitere Informationen finden Sie unter dem Abschnitt "Termine". Im Anschluss an den Vor Ort Termin wird Ihr Anbieter Ihnen ein verifiziertes Angebot zur Verfügung stellen.`,
    descriptionPast: () =>
      `Ihr Anbieter hat die Ergebnisse des Vor Ort Termins geprüft und ggf. offene Rückfragen mit Ihnen besprochen bevor er uns final mit der Errichtung Ihrer PV-Anlage beauftragt hat.`,
    disabled: true,
  },
  {
    type: DateType.vot_koordinierung,
    descriptionPresent: () =>
      `In Kürze wird Sie unser Projektmanager telefonisch kontaktieren, um einen Vor-Ort-Termin mit Ihnen zu vereinbaren.`,
    descriptionPast: () =>
      `Unser Projektmanager hat Sie telefonisch kontaktieren, um einen Vor-Ort-Termin mit Ihnen zu vereinbaren.`,
    disabled: true,
  },
  {
    type: DateType.complete,
    descriptionPresent: (...args: Array<string>) =>
      `Ihr Anbieter hat uns alle Daten zu Ihrem Projekt übermittelt. Den aktuellen Stand Ihres Auftrags können Sie hier einsehen. Ihre Auftragsnummer lautet ${args[0]}.`,
    descriptionPast: (...args: Array<string>) =>
      `Ihr Anbieter hat uns alle Daten zu Ihrem Projekt übermittelt und wir haben Ihr Projekt Ihrem persönlichen Projektmanager ${args[1]} zugewiesen. Den aktuellen Stand Ihres Auftrags können Sie hier einsehen. Ihre Auftragsnummer lautet ${args[0]}.`,
    disabled: true,
    lastItem: true,
  },
];

export const DateTypeFullName = {
  [DateType.complete]: "Angeboten",
  [DateType.tender]: "Tender",
  [DateType.finalize]: "Abgeschlossen",
  [DateType.vot_koordinierung]: "VOT Koordinierung",
  [DateType.vot_dokumentation]: "VOT Dokumentation",
  [DateType.beauftragung]: "Beauftragung",
  [DateType.koordinierung]: "Koordinierung",
  [DateType.montage]: "Montage",
  [DateType.inbetriebnahme]: "Technische Inbetriebnahme",
  [DateType.zaehlersetzung]: "Zählersetzung",
};

export const Days = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
