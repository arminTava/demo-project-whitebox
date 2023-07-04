import { parse } from "graphql";

export const searchTicketTypeDef = parse(/* GraphQL */ `
  type Assignee {
    firstName: String
    lastName: String
    photoURL: String
    id: String
    email: String
  }

  type Team {
    name: String
    id: String
  }

  type Cf {
    cf_auftraggeber: String
    cf_ganze_zahl_1: String
    cf_entnahmeliste_1_1: String
    cf_entnahmeliste_1: String
    cf_leistung: String
    cf_link_im_board: String
    cf_name_beschwerdegeber: String
    cf_name_endkunde: String
    cf_tel_1: String
    cf_tel_agent: String
    cf_wohnort: String
  }

  type Department {
    name: String
    id: String
  }

  type Contact {
    lastName: String
    firstName: String
    phone: String
    email: String
  }

  type SharedDepartments {
    name: String
    id: String
    type: String
  }

  type Data {
    modifiedTime: String
    ticketNumber: String
    subCategory: String
    statusType: String
    subject: String
    dueDate: String
    departmentId: String
    channel: String
    onholdTime: String
    description: String
    resolution: String
    closedTime: String
    approvalCount: String
    timeEntryCount: String
    isOverDue: Boolean
    isTrashed: Boolean
    createdTime: String
    id: String
    email: String
    channelCode: String
    customerResponseTime: String
    product: String
    productId: String
    contactId: String
    threadCount: String
    priority: String
    classification: String
    assigneeId: String
    commentCount: String
    taskCount: String
    phone: String
    webUrl: String
    teamId: String
    attachmentCount: String
    isEscalated: Boolean
    isSpam: Boolean
    category: String
    status: String
    assignee: Assignee
    team: Team
    secondaryContacts: [String]
    cf: Cf
    department: Department
    contact: Contact
    sharedDepartments: [SharedDepartments]
    entitySkills: [String]
  }

  type SearchTicket {
    count: Int
    data: [Data]
  }

  # Types with identical fields:
  # Team Department

  extend type Query {
    searchTicket(orderNumber: String): SearchTicket
  }
`);
