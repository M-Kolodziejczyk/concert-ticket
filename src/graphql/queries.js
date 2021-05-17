/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($email: String!) {
    getUser(email: $email) {
      email
      name
      artistID
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      bands {
        items {
          id
          userName
          identityId
          name
          genre
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      artist {
        id
        identityId
        name
        genre
        role
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        bands {
          nextToken
          startedAt
        }
      }
      ordersByDate {
        items {
          id
          customer
          userName
          status
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
          userID
        }
        nextToken
        startedAt
      }
      ordersByStatus {
        items {
          id
          customer
          userName
          status
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
          userID
        }
        nextToken
        startedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        concerts {
          nextToken
          startedAt
        }
        bands {
          nextToken
          startedAt
        }
        artist {
          id
          identityId
          name
          genre
          role
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        ordersByDate {
          nextToken
          startedAt
        }
        ordersByStatus {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        email
        name
        artistID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        concerts {
          nextToken
          startedAt
        }
        bands {
          nextToken
          startedAt
        }
        artist {
          id
          identityId
          name
          genre
          role
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        ordersByDate {
          nextToken
          startedAt
        }
        ordersByStatus {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        bands {
          nextToken
          startedAt
        }
        artists {
          nextToken
          startedAt
        }
        tickets {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      bands {
        items {
          id
          concertID
          bandID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      artists {
        items {
          id
          concertID
          artistID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const syncConcerts = /* GraphQL */ `
  query SyncConcerts(
    $filter: ModelConcertFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncConcerts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userName
        identityId
        name
        date
        venue
        genres
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        bands {
          nextToken
          startedAt
        }
        artists {
          nextToken
          startedAt
        }
        tickets {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        members {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      members {
        items {
          id
          bandID
          artistID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const syncBands = /* GraphQL */ `
  query SyncBands(
    $filter: ModelBandFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBands(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userName
        identityId
        name
        genre
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        members {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        bands {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      bands {
        items {
          id
          bandID
          artistID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const syncArtists = /* GraphQL */ `
  query SyncArtists(
    $filter: ModelArtistFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncArtists(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        identityId
        name
        genre
        role
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        bands {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncArtistBandJoins = /* GraphQL */ `
  query SyncArtistBandJoins(
    $filter: ModelArtistBandJoinFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncArtistBandJoins(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        bandID
        artistID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        band {
          id
          userName
          identityId
          name
          genre
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        artist {
          id
          identityId
          name
          genre
          role
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncConcertBandJoins = /* GraphQL */ `
  query SyncConcertBandJoins(
    $filter: ModelConcertBandJoinFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncConcertBandJoins(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        concertID
        bandID
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        band {
          id
          userName
          identityId
          name
          genre
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncConcertArtistJoins = /* GraphQL */ `
  query SyncConcertArtistJoins(
    $filter: ModelConcertArtistJoinFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncConcertArtistJoins(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        concertID
        artistID
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        artist {
          id
          identityId
          name
          genre
          role
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        owner
        orders {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        bands {
          nextToken
          startedAt
        }
        artists {
          nextToken
          startedAt
        }
        tickets {
          nextToken
          startedAt
        }
      }
      owner
      orders {
        items {
          id
          ticketID
          orderID
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const syncTickets = /* GraphQL */ `
  query SyncTickets(
    $filter: ModelTicketFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTickets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        description
        price
        startDate
        endDate
        quantity
        amount
        concertID
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        owner
        orders {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        owner
        orders {
          nextToken
          startedAt
        }
      }
      order {
        id
        customer
        userName
        status
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
        tickets {
          nextToken
          startedAt
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
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          updatedAt
          userID
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTicketOrders = /* GraphQL */ `
  query SyncTicketOrders(
    $filter: ModelTicketOrderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTicketOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        ticketID
        orderID
        userID
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          updatedAt
          userID
        }
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
        updatedAt
        tickets {
          nextToken
          startedAt
        }
        userID
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
      updatedAt
      tickets {
        items {
          id
          ticketID
          orderID
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      userID
    }
  }
`;
export const syncOrders = /* GraphQL */ `
  query SyncOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        customer
        userName
        status
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
        tickets {
          nextToken
          startedAt
        }
        userID
      }
      nextToken
      startedAt
    }
  }
`;
