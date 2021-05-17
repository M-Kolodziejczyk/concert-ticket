/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($email: String!) {
    getUser(email: $email) {
      email
      name
      artistID
      createdAt
      updatedAt
      owner
      concerts {
        items {
          id
          userName
          identityId
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
      bands {
        items {
          id
          userName
          identityId
          name
          genre
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      artist {
        id
        identityId
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
      ordersByDate {
        items {
          id
          customer
          userName
          status
          createdAt
          updatedAt
          userID
        }
        nextToken
      }
      ordersByStatus {
        items {
          id
          customer
          userName
          status
          createdAt
          updatedAt
          userID
        }
        nextToken
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $email: String
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        email
        name
        artistID
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
          identityId
          name
          genre
          role
          createdAt
          updatedAt
          owner
        }
        ordersByDate {
          nextToken
        }
        ordersByStatus {
          nextToken
        }
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
        userName
        identityId
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
      nextToken
    }
  }
`;
export const getConcert = /* GraphQL */ `
  query GetConcert($id: ID!) {
    getConcert(id: $id) {
      id
      userName
      identityId
      name
      date
      venue
      genres
      createdAt
      updatedAt
      owner
      bands {
        items {
          id
          concertID
          bandID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      artists {
        items {
          id
          concertID
          artistID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      tickets {
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
        userName
        identityId
        name
        genre
        createdAt
        updatedAt
        owner
        members {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getBand = /* GraphQL */ `
  query GetBand($id: ID!) {
    getBand(id: $id) {
      id
      userName
      identityId
      name
      genre
      createdAt
      updatedAt
      owner
      members {
        items {
          id
          bandID
          artistID
          createdAt
          updatedAt
          owner
        }
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
        identityId
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
      nextToken
    }
  }
`;
export const getArtist = /* GraphQL */ `
  query GetArtist($id: ID!) {
    getArtist(id: $id) {
      id
      identityId
      name
      genre
      role
      createdAt
      updatedAt
      owner
      bands {
        items {
          id
          bandID
          artistID
          createdAt
          updatedAt
          owner
        }
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
        concert {
          id
          userName
          identityId
          name
          date
          venue
          genres
          createdAt
          updatedAt
          owner
        }
        owner
        orders {
          nextToken
        }
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
      createdAt
      updatedAt
      concert {
        id
        userName
        identityId
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
      owner
      orders {
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
  }
`;
export const getTicketOrder = /* GraphQL */ `
  query GetTicketOrder($id: ID!) {
    getTicketOrder(id: $id) {
      id
      ticketID
      orderID
      userID
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
        concert {
          id
          userName
          identityId
          name
          date
          venue
          genres
          createdAt
          updatedAt
          owner
        }
        owner
        orders {
          nextToken
        }
      }
      order {
        id
        customer
        userName
        status
        createdAt
        updatedAt
        tickets {
          nextToken
        }
        userID
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
        order {
          id
          customer
          userName
          status
          createdAt
          updatedAt
          userID
        }
      }
      nextToken
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
        userName
        status
        createdAt
        updatedAt
        tickets {
          nextToken
        }
        userID
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
      userName
      status
      createdAt
      updatedAt
      tickets {
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
      userID
    }
  }
`;
