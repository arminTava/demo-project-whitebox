import { prisma } from "../src/context";

// der Auftrag
export const createTestData = async () => {
  await prisma.core_offers.createMany({
    data: [
      {
        offerId: "11111111",
        offerNumber: "12345",
        memberId: "090909",
        zip: "50676",
        city: "Köln",
        customerFirstName: "Hans",
        customerLastName: "Endkunde",
        address: "Solarstraße 4",
        memberIdMatched: "080808",
        responsibleMatchedUserId: "070707",
        responsibleUserId: "060606",
        projectStatus: "active",
        legacyId: "",
        legacyCompanyId: "",
        offerType: "",
        description: "",
        customerNotes: "",
        createdBy: "",
      },
      {
        offerId: "22222222",
        offerNumber: "45678",
        memberId: "090909",
        zip: "50676",
        city: "Köln",
        customerFirstName: "Peter",
        customerLastName: "Endkunde",
        address: "Solarstraße 56",
        memberIdMatched: "080808",
        responsibleMatchedUserId: "171717",
        responsibleUserId: "161616",
        projectStatus: "active",
        legacyId: "",
        legacyCompanyId: "",
        offerType: "",
        description: "",
        customerNotes: "",
        createdBy: "",
      },
      {
        offerId: "33333333",
        offerNumber: "67890",
        memberId: "090909",
        zip: "50676",
        city: "Köln",
        customerFirstName: "Hans",
        customerLastName: "Endkunde",
        address: "Solarstraße 4",
        memberIdMatched: "080808",
        responsibleMatchedUserId: "272727",
        responsibleUserId: "262626",
        projectStatus: "active",
        legacyId: "",
        legacyCompanyId: "",
        offerType: "",
        description: "",
        customerNotes: "",
        createdBy: "",
      },
    ],
  });

  // die beiden Projektmanager
  await prisma.core_sub_users.createMany({
    data: [
      // Installion PM
      {
        memberId: "080808", // für Installion PM = memberIdMatched
        userId: "070707", // = responsibleMatchedUserId
        firstName: "Klaus",
        lastName: "Ansprech",
        email: "ansprech@installion.eu",
        phone: "+49221485934",
        mobile: "+4915203845723",
        isPrincipal: true,
        createdBy: "",
      },
      // AG PM
      {
        memberId: "000000", // für AG PM egal
        userId: "060606", // = responsibleUserId
        firstName: "Frieda",
        lastName: "Auftrag",
        email: "auftrag@geber.com",
        phone: "+492211234321",
        mobile: "+4915208567856",
        isPrincipal: false,
        createdBy: "",
      },
      // Installion PM
      {
        memberId: "080808", // für Installion PM = memberIdMatched
        userId: "171717", // = responsibleMatchedUserId
        firstName: "Klaus",
        lastName: "Ansprech2",
        email: null,
        phone: "+49221485934",
        mobile: "+4915203845723",
        isPrincipal: true,
        createdBy: "",
      },
      // AG PM
      {
        memberId: "000000", // für AG PM egal
        userId: "161616", // = responsibleUserId
        firstName: "Frieda",
        lastName: "Auftrag2",
        email: "auftrag2@geber.com",
        phone: null,
        mobile: "+4915208567856",
        isPrincipal: false,
        createdBy: "",
      },
    ],
  });

  // die Niederlassung + Auftraggeber
  await prisma.core_members.createMany({
    data: [
      {
        companyName: "Installion Services - Köln",
        address: "Aachener Straße 23",
        zip: "50676",
        city: "Köln",
        memberId: "080808", // = memberIdMatched
        createdBy: "",
      },
      {
        companyName: "Lichtblick",
        address: "Aachener Straße 500",
        zip: "50676",
        city: "Köln",
        memberId: "090909", // = memberId
        createdBy: "",
      },
    ],
  });

  // die Termine
  await prisma.core_calendar.createMany({
    data: [
      {
        itemId: "1",
        memberId: "090909",
        offerId: "11111111",
        categoryId: "12",
        userId: "",
        text: "",
        comment: "",
        start_date: "2030-06-17T08:20:00Z",
        end_date: "2030-06-17T12:40:00Z",
        isBinding: true,
        createdBy: "",
      },
      {
        offerId: "11111111",
        itemId: "2",
        memberId: "090909",
        categoryId: "34",
        start_date: "2023-02-05T15:00:00Z",
        end_date: "2023-02-05T18:00:00Z",
        userId: "",
        text: "",
        comment: "",
        createdBy: "",
        isBinding: true,
      },
      {
        offerId: "11111111",
        itemId: "3",
        memberId: "090909",
        categoryId: "56",
        start_date: "2023-02-02T11:00:00Z",
        end_date: "2023-02-02T12:00:00Z",
        userId: "",
        text: "",
        comment: "",
        createdBy: "",
        isBinding: true,
      },
      {
        offerId: "22222222",
        itemId: "4",
        memberId: "191919",
        categoryId: "12",
        start_date: "2030-06-17T08:20:00Z",
        end_date: "2030-06-17T12:40:00Z",
        userId: "",
        text: "",
        comment: "",
        createdBy: "",
        isBinding: true,
      },
      {
        offerId: "22222222",
        itemId: "5",
        memberId: "191919",
        categoryId: "34",
        start_date: "2023-02-05T15:00:00Z",
        end_date: "2023-02-05T18:00:00Z",
        userId: "",
        text: "",
        comment: "",
        createdBy: "",
        isBinding: true,
      },
      {
        offerId: "22222222",
        itemId: "6",
        memberId: "191919",
        categoryId: "56",
        start_date: "2023-02-02T11:00:00Z",
        end_date: "2023-02-02T12:00:00Z",
        userId: "",
        text: "",
        comment: "",
        createdBy: "",
        isBinding: true,
      },
    ],
  });

  // die Bezeichnung der Termine
  await prisma.core_calendar_types.createMany({
    data: [
      {
        categoryId: "56",
        title: "VOT Termin",
        color: "",
        description: "",
        createdBy: "",
      },
      {
        categoryId: "12",
        title: "Zählersetzung",
        color: "",
        description: "",
        createdBy: "",
      },
      {
        categoryId: "34",
        title: "Gerüstabbau",
        color: "",
        description: "",
        createdBy: "",
      },
    ],
  });

  // die Status
  await prisma.core_offers_log.createMany({
    data: [
      {
        offerId: "11111111",
        type: "complete",
        createdAt: "2023-02-02T11:00:00Z",
      },
      {
        offerId: "11111111",
        type: "vot_koordinierung",
        createdAt: "2023-02-03T11:00:00Z",
      },
      {
        offerId: "11111111",
        type: "vot_dokumentation",
        createdAt: "2023-02-04T11:00:00Z",
      },
      {
        offerId: "11111111",
        type: "beauftragung",
        createdAt: "2023-02-05T11:00:00Z",
      },
      {
        offerId: "11111111",
        type: "koordinierung",
        createdAt: "2023-02-06T11:00:00Z",
      },
      {
        offerId: "11111111",
        type: "montage",
        createdAt: "2023-02-07T11:00:00Z",
      },
      {
        offerId: "11111111",
        type: "inbetriebnahme",
        createdAt: "2023-02-08T11:00:00Z",
      },
      {
        offerId: "11111111",
        type: "zaehlersetzung",
        createdAt: "2023-02-09T11:00:00Z",
      },
      {
        offerId: "11111111",
        type: "finalize",
        createdAt: "2023-02-10T11:00:00Z",
      },
      {
        offerId: "22222222",
        type: "complete",
        createdAt: "2023-02-02T11:00:00Z",
      },
      {
        offerId: "22222222",
        type: "vot_koordinierung",
        createdAt: "2023-02-03T11:00:00Z",
      },
      {
        offerId: "22222222",
        type: "vot_dokumentation",
        createdAt: "2023-02-04T11:00:00Z",
      },
      {
        offerId: "22222222",
        type: "beauftragung",
        createdAt: "2023-02-05T11:00:00Z",
      },
      {
        offerId: "22222222",
        type: "koordinierung",
        createdAt: "2023-02-06T11:00:00Z",
      },
      {
        offerId: "33333333",
        type: "complete",
        createdAt: "2023-02-02T11:00:00Z",
      },
    ],
  });
};
void createTestData();
