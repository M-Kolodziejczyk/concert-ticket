/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      artistID
      ordersByDate {
        nextToken
      }
      ordersByStatus {
        nextToken
      }
      createdAt
      updatedAt
      owner
      concerts {
        nextToken
      }
      bands {
        nextToken
      }
      artist {
        id
        userID
        name
        genre
        role
        createdAt
        updatedAt
        owner
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        artistID
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getTicketOrder = /* GraphQL */ `
  query GetTicketOrder($id: ID!) {
    getTicketOrder(id: $id) {
      id
      ticketID
      orderID
      userID
      order {
        id
        customer
        userID
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
        owner
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
        userID
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
      userID
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
        userID
        status
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
        userID
        name
        date
        venue
        genres
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getConcert = /* GraphQL */ `
  query GetConcert($id: ID!) {
    getConcert(id: $id) {
      id
      userID
      name
      date
      venue
      genres
      createdAt
      updatedAt
      owner
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
        userID
        name
        genre
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getBand = /* GraphQL */ `
  query GetBand($id: ID!) {
    getBand(id: $id) {
      id
      userID
      name
      genre
      createdAt
      updatedAt
      owner
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
        userID
        name
        genre
        role
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getArtist = /* GraphQL */ `
  query GetArtist($id: ID!) {
    getArtist(id: $id) {
      id
      userID
      name
      genre
      role
      createdAt
      updatedAt
      owner
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
        owner
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
        userID
        name
        date
        venue
        genres
        createdAt
        updatedAt
        owner
      }
      owner
    }
  }
`;
