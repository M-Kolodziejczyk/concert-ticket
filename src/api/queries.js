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
          description
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
      price
      fullName
      order {
        id
        customer
        userName
        status
        stripeIntentID
        total
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
        eventName
        description
        price
        startDate
        endDate
        date
        venue
        type
        quantity
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
          description
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
        price
        fullName
        order {
          id
          customer
          userName
          status
          stripeIntentID
          total
          createdAt
          updatedAt
          userID
        }
        createdAt
        updatedAt
        ticket {
          id
          eventName
          description
          price
          startDate
          endDate
          date
          venue
          type
          quantity
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
      stripeIntentID
      total
      createdAt
      tickets {
        items {
          id
          ticketID
          orderID
          userID
          price
          fullName
          createdAt
          updatedAt
          ticket {
            eventName
            description
            date
            venue
            type
            price
          }
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
        stripeIntentID
        total
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
export const ordersByUserByDate = /* GraphQL */ `
  query OrdersByUserByDate(
    $userName: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByUserByDate(
      userName: $userName
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        customer
        userName
        status
        stripeIntentID
        total
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
      description
      keyImage
      invitations
      createdAt
      updatedAt
      owner
      bands {
        items {
          band {
            id
            name
            genre
          }
        }
      }
      artists {
        items {
          artist {
            id
            name
            genre
            role
          }
        }
      }
      tickets {
        items {
          id
          eventName
          description
          price
          startDate
          endDate
          date
          venue
          type
          quantity
        }
      }
    }
  }
`;
export const getUserConcert = /* GraphQL */ `
  query GetConcert($id: ID!) {
    getConcert(id: $id) {
      id
      userName
      identityId
      name
      date
      venue
      genres
      description
      keyImage
      invitations
      createdAt
      updatedAt
      owner
      bands {
        items {
          id
          band {
            id
            name
            genre
          }
        }
      }
      artists {
        items {
          artist {
            id
            name
            genre
            role
          }
        }
      }
      tickets {
        items {
          id
          eventName
          description
          price
          startDate
          endDate
          date
          venue
          type
          quantity
        }
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
        description
        keyImage
        invitations
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const concertsByUser = /* GraphQL */ `
  query ConcertsByUser(
    $userName: String
    $sortDirection: ModelSortDirection
    $filter: ModelConcertFilterInput
    $limit: Int
    $nextToken: String
  ) {
    concertsByUser(
      userName: $userName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userName
        identityId
        name
        date
        venue
        genres
        description
        keyImage
        invitations
        createdAt
        updatedAt
        owner
        bands {
          items {
            band {
              id
              name
              genre
            }
          }
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
      description
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
          owner
          artist {
            name
            role
            genre
          }
        }
        nextToken
      }
      concerts {
        items {
          id
          concertID
          bandID
          concert {
            id
            name
            venue
            date
          }
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
        description
        keyImage
        invitations
        createdAt
        updatedAt
        owner
        members {
          nextToken
        }
        concerts {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const bandsByUser = /* GraphQL */ `
  query BandsByUser(
    $userName: String
    $sortDirection: ModelSortDirection
    $filter: ModelBandFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bandsByUser(
      userName: $userName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userName
        identityId
        name
        genre
        description
        keyImage
        invitations
        createdAt
        updatedAt
        owner
        members {
          items {
            artist {
              name
              role
              genre
            }
          }
        }
        concerts {
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
      description
      genre
      role
      createdAt
      updatedAt
      owner
      bands {
        items {
          band {
            id
            name
            genre
          }
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
        description
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
      eventName
      description
      price
      startDate
      endDate
      date
      venue
      type
      quantity
      concertID
      orders {
        items {
          id
          ticketID
          orderID
          userID
          price
          fullName
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
        description
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
        eventName
        description
        price
        startDate
        endDate
        date
        venue
        type
        quantity
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
          description
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
export const ticketsByConcertID = /* GraphQL */ `
  query TicketsByConcertID(
    $concertID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelTicketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ticketsByConcertID(
      concertID: $concertID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventName
        description
        price
        startDate
        endDate
        date
        venue
        type
        quantity
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
          description
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
