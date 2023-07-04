import { prisma } from "../src/context";

export const createCoreCalender = async () => {
  await prisma.core_calendar.createMany({
    data: [
      {
        itemId: "1200034560",
        memberId: "1234567",
        categoryId: "x12345",
        offerId: "123456p",
        userId: "123456",
        text: "text",
        comment: "comment",
        createdBy: "me",
        isBinding: true,
      },
      {
        itemId: "1200034560_2",
        memberId: "1234567",
        offerId: "123456p2",
        userId: "123456",
        text: "text",
        comment: "comment",
        createdBy: "me",
        isBinding: true,
      },
    ],
  });
};

export const createCoreCalenderTypes = async () => {
  await prisma.core_calendar_types.create({
    data: {
      categoryId: "x12345",
      memberId: "1234567",
      title: "title",
      type: "department",
      position: "pos",
      color: "color",
      description: "des",
      createdBy: "me",
    },
  });
};

export const createCoreMember = async () => {
  await prisma.core_members.create({
    data: {
      companyName: "installion",
      createdBy: "me",
      memberId: "1234567",
    },
  });
};

export const createCoreOffers = async () => {
  await prisma.core_offers.create({
    data: {
      legacyId: "id",
      legacyCompanyId: "id",
      offerId: "12340007",
      offerNumber: "1230009",
      zip: "50891",
      offerType: "offertype",
      description: "des",
      customerNotes: "notes",
      status: "active",
      createdBy: "me",
    },
  });
};
export const createCoreOffersLog = async () => {
  await prisma.core_offers_log.create({
    data: {
      offerId: "12340007",
      type: "add",
    },
  });
};

export const createCoreSubUsers = async () => {
  await prisma.core_sub_users.create({
    data: {
      memberId: "12340007",
      userId: "123x45",
      email: "me@installion.eu",
      createdBy: "add",
      isPrincipal: true,
    },
  });
};
