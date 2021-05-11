/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTicketOrder = /* GraphQL */ `
  query GetTicketOrder($id: ID!) {
    getTicketOrder(id: $id) {
      id
      ticketID
      orderID
      customerID
      order {
        id
        customer
        customerID
        status
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      ticket {
        id
        description
        price
        startDate
        endDate
        quantity
        amount
        concertID
        createdAt
        updatedAt
        customerID
      }
    }
  }
`;
export const listTicketOrders = /* GraphQL */ `
  query ListTicketOrders(
    $filter: ModelTicketOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTicketOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ticketID
        orderID
        customerID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      customer
      customerID
      status
      createdAt
      tickets {
        nextToken
      }
      updatedAt
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        customer
        customerID
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($email: String!) {
    getCustomer(email: $email) {
      id
      name
      email
      ordersByDate {
        nextToken
      }
      ordersByStatus {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $email: String
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCustomers(
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listConcerts = /* GraphQL */ `
  query ListConcerts(
    $filter: ModelConcertFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConcerts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        date
        venue
        genres
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getConcert = /* GraphQL */ `
  query GetConcert($id: ID!) {
    getConcert(id: $id) {
      id
      name
      date
      venue
      genres
      createdAt
      updatedAt
      bands {
        nextToken
      }
      artists {
        nextToken
      }
      tickets {
        nextToken
      }
    }
  }
`;
export const listBands = /* GraphQL */ `
  query ListBands(
    $filter: ModelBandFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBands(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        name
        genre
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBand = /* GraphQL */ `
  query GetBand($id: ID!) {
    getBand(id: $id) {
      id
      owner
      name
      genre
      createdAt
      updatedAt
      members {
        nextToken
      }
    }
  }
`;
export const listArtists = /* GraphQL */ `
  query ListArtists(
    $filter: ModelArtistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArtists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        name
        genre
        role
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getArtist = /* GraphQL */ `
  query GetArtist($id: ID!) {
    getArtist(id: $id) {
      id
      owner
      name
      genre
      role
      createdAt
      updatedAt
      bands {
        nextToken
      }
    }
  }
`;
export const listTickets = /* GraphQL */ `
  query ListTickets(
    $filter: ModelTicketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTickets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        price
        startDate
        endDate
        quantity
        amount
        concertID
        createdAt
        updatedAt
        customerID
      }
      nextToken
    }
  }
`;
export const getTicket = /* GraphQL */ `
  query GetTicket($id: ID!) {
    getTicket(id: $id) {
      id
      description
      price
      startDate
      endDate
      quantity
      amount
      concertID
      orders {
        nextToken
      }
      createdAt
      updatedAt
      concert {
        id
        name
        date
        venue
        genres
        createdAt
        updatedAt
      }
      customerID
    }
  }
`;
