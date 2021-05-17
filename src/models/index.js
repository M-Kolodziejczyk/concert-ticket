// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Artist, ArtistBandJoin, Band, Concert, Ticket, TicketOrder, Order, ConcertBandJoin, ConcertArtistJoin } = initSchema(schema);

export {
  User,
  Artist,
  ArtistBandJoin,
  Band,
  Concert,
  Ticket,
  TicketOrder,
  Order,
  ConcertBandJoin,
  ConcertArtistJoin
};