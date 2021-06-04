/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($email: String!) {
    getUser(email: $email) {
      email
      name
      artistID
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
          keyImage
          invitations
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
          keyImage
          invitations
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
          identityId
          name
          genre
          role
          createdAt
          updatedAt
          owner
        }
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
        userName
        status
        createdAt
        tickets {
          nextToken
        }
        updatedAt
        userID
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
        orders {
          nextToken
        }
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
          keyImage
          invitations
          createdAt
          updatedAt
          owner
        }
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
        order {
          id
          customer
          userName
          status
          createdAt
          updatedAt
          userID
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
      updatedAt
      userID
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
        tickets {
          nextToken
        }
        updatedAt
        userID
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
      keyImage
      invitations
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
        keyImage
        invitations
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
export const getBand = /* GraphQL */ `
  query GetBand($id: ID!) {
    getBand(id: $id) {
      id
      userName
      identityId
      name
      genre
      invitations
      keyImage
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
        keyImage
        invitations
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
          items {
            bandID
            band {
              name
            }
          }
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
        keyImage
        invitations
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
        orders {
          nextToken
        }
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
          keyImage
          invitations
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
export const getInvitation = /* GraphQL */ `
  query GetInvitation($email: String!, $createdAt: AWSDateTime!) {
    getInvitation(email: $email, createdAt: $createdAt) {
      email
      message
      authorID
      authorEmail
      senderTable
      senderTableElementID
      senderTableElementName
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listInvitations = /* GraphQL */ `
  query ListInvitations(
    $email: String
    $createdAt: ModelStringKeyConditionInput
    $filter: ModelInvitationFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listInvitations(
      email: $email
      createdAt: $createdAt
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        email
        message
        authorID
        authorEmail
        senderTable
        senderTableElementID
        senderTableElementName
        status
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
