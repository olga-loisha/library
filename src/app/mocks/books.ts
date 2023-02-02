import { Book } from '../models/Book';
import { Genre } from '../models/enums/genre';

export const Books: Book[] = [
  {
    id: 1,
    name: 'Seven Husbands of Evelyn Hugo',
    author: 'Taylor Jenkins Reid',
    genre: Genre.Romance,
    annotation: 'Aging and reclusive Hollywood movie icon Evelyn Hugo is finally ready to tell the truth about her glamorous and scandalous life. But when she chooses unknown magazine reporter Monique Grant for the job, no one is more astounded than Monique herself. Why her? Why now?'
  },
  {
    id: 2,
    name: 'Spare',
    author: 'Prince Harry the Duke of Sussex',
    genre: Genre.Memoir,
    annotation: 'It was one of the most searing images of the twentieth century: two young boys, two princes, walking behind their mother\'s coffin as the world watched in sorrow - and horror. As Diana, Princess of Wales, was laid to rest, billions wondered what the princes must be thinking and feeling - and how their lives would play out from that point on.'
  },
  {
    id: 3,
    name: 'Elektra',
    author: 'Jennifer Saint',
    genre: Genre.Fiction,
    annotation: 'The House of Atreus is cursed. A bloodline tainted by a generational cycle of violence and vengeance. This is the story of three women, their fates inextricably tied to this curse, and the fickle nature of men and gods.'
  },
  {
    id: 4,
    name: 'Godkiller',
    author: 'Hannah Kaner',
    genre: Genre.Fantasy,
    annotation: 'Kissen\'s family were killed by zealots of a fire god. Now, she makes a living killing gods, and enjoys it. That is until she finds a god she cannot kill: Skedi, a god of white lies, has somehow bound himself to a young noble, and they are both on the run from unknown assassins.'
  },
  {
    id: 5,
    name: 'Holly',
    author: 'Stephen King',
    genre: Genre.Horror,
    annotation: 'Stephen King\'s Holly marks the triumphant return of beloved King character Holly Gibney. Readers have witnessed Holly\'s gradual transformation from a shy (but also brave and ethical) recluse in Mr. Mercedes to Bill Hodges\'s partner in Finders Keepers to a full-fledged, smart, and occasionally tough private detective in The Outsider. In King\'s new novel, Holly is on her own, and up against a pair of unimaginably depraved and brilliantly disguised adversaries.'
  },
  {
    id: 6,
    name: 'Book of Night',
    author: 'Holly Black',
    genre: Genre.Young_Adult,
    annotation: 'In Charlie Hall’s world, shadows can be altered, for entertainment and cosmetic preferences—but also to increase power and influence. You can alter someone’s feelings—and memories—but manipulating shadows has a cost, with the potential to take hours or days from your life. Your shadow holds all the parts of you that you want to keep hidden—a second self, standing just to your left, walking behind you into lit rooms. And sometimes, it has a life of its own.'
  }
];
