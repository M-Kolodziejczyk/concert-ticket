import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class User {
  readonly id: string;
  readonly email: string;
  readonly name?: string;
  readonly artist?: Artist;
  readonly bands?: (Band | null)[];
  readonly concerts?: (Concert | null)[];
  readonly ordersByDate?: (Order | null)[];
  readonly ordersByStatus?: (Order | null)[];
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Artist {
  readonly id: string;
  readonly identityId?: string;
  readonly name: string;
  readonly genre?: string[];
  readonly role?: string[];
  readonly bands?: (ArtistBandJoin | null)[];
  constructor(init: ModelInit<Artist>);
  static copyOf(source: Artist, mutator: (draft: MutableModel<Artist>) => MutableModel<Artist> | void): Artist;
}

export declare class ArtistBandJoin {
  readonly id: string;
  readonly band: Band;
  readonly artist: Artist;
  constructor(init: ModelInit<ArtistBandJoin>);
  static copyOf(source: ArtistBandJoin, mutator: (draft: MutableModel<ArtistBandJoin>) => MutableModel<ArtistBandJoin> | void): ArtistBandJoin;
}

export declare class Band {
  readonly id: string;
  readonly userName: string;
  readonly identityId?: string;
  readonly name: string;
  readonly genre: string;
  readonly members?: (ArtistBandJoin | null)[];
  constructor(init: ModelInit<Band>);
  static copyOf(source: Band, mutator: (draft: MutableModel<Band>) => MutableModel<Band> | void): Band;
}

export declare class Concert {
  readonly id: string;
  readonly userName: string;
  readonly identityId?: string;
  readonly name: string;
  readonly date: string;
  readonly venue: string;
  readonly genres: string;
  readonly tickets?: (Ticket | null)[];
  readonly bands?: (ConcertBandJoin | null)[];
  readonly artists?: (ConcertArtistJoin | null)[];
  constructor(init: ModelInit<Concert>);
  static copyOf(source: Concert, mutator: (draft: MutableModel<Concert>) => MutableModel<Concert> | void): Concert;
}

export declare class Ticket {
  readonly id: string;
  readonly description?: string;
  readonly price: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly quantity: number;
  readonly amount: string;
  readonly concert?: Concert;
  readonly orders?: (TicketOrder | null)[];
  constructor(init: ModelInit<Ticket>);
  static copyOf(source: Ticket, mutator: (draft: MutableModel<Ticket>) => MutableModel<Ticket> | void): Ticket;
}

export declare class TicketOrder {
  readonly id: string;
  readonly userID: string;
  readonly ticket?: Ticket;
  readonly order?: Order;
  constructor(init: ModelInit<TicketOrder>);
  static copyOf(source: TicketOrder, mutator: (draft: MutableModel<TicketOrder>) => MutableModel<TicketOrder> | void): TicketOrder;
}

export declare class Order {
  readonly id: string;
  readonly customer: string;
  readonly userName: string;
  readonly status: string;
  readonly createdAt: string;
  readonly tickets?: (TicketOrder | null)[];
  constructor(init: ModelInit<Order>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}

export declare class ConcertBandJoin {
  readonly id: string;
  readonly concert: Concert;
  readonly band: Band;
  constructor(init: ModelInit<ConcertBandJoin>);
  static copyOf(source: ConcertBandJoin, mutator: (draft: MutableModel<ConcertBandJoin>) => MutableModel<ConcertBandJoin> | void): ConcertBandJoin;
}

export declare class ConcertArtistJoin {
  readonly id: string;
  readonly concert: Concert;
  readonly artist: Artist;
  constructor(init: ModelInit<ConcertArtistJoin>);
  static copyOf(source: ConcertArtistJoin, mutator: (draft: MutableModel<ConcertArtistJoin>) => MutableModel<ConcertArtistJoin> | void): ConcertArtistJoin;
}