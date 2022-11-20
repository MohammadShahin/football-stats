// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  fact: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const randomFacts: Data[] = [
    {
      fact: 'Chelsea are the only team to be holders of the Europa League and the Champions League at the same time. In 2012, the Blues won their first Champions League. The following season, with Rafa Benitez at the helm, the club won the Europa League final, on 15 May. Given that the Champions League final was due on May 25, for 10 days only, Chelsea were the holders of both titles.',
    },
    {
      fact: "Giuseppe Bergomi played in four World Cups but - but never in a qualifier. 'The Uncle' was a late call-up to the 1982 squad at the age of 18, playing in the final three matches of the tournament - but he wasn't a regular during the qualifying process for the tournament. As holders in 1986, Italy didn't have to qualify, while in 1990, The Azzurri held the tournament. After being dropped under Arrigo Sacchi, Bergomi was a late call-up for 1998, when he made three appearances.",
    },
    {
      fact: 'Matt Busby played for Manchester City and Liverpool. Yep, the legendary Manchester United manager racked up over 300 appearances as a player for United’s two biggest rivals before leading the Red Devils to their very first European Cup victory and defining the path that the club would walk down for the following half-century. ',
    },
    {
      fact: 'Portsmouth hold the record for having held the FA Cup for the longest - seven years - despite only winning it once in that time. This was because they won it in 1939 and there was no professional football during the war. Likewise, Italy held the World Cup between 1934 and 1950 - 16 years, or four tournaments - having only won it twice in that time. ',
    },
    {
      fact: 'Bixente Lizarazu was the first World and European Champion at both club and international level. The Frenchman won the Champions League final and Intercontinental Cup in 2001 with Bayern Munich, after lifting the World Cup in 1998 and the European Championship in 2000.',
    },
    {
      fact: 'In 1967, Wolves, Stoke and Sunderland played domestic football in the USA. The newly formed United Soccer Association lifted whole teams from Europe and implanted them to America. Wolverhampton Wanderers, Stoke City and Sunderland were renamed LA Wolves, Cleveland Stokers and Vancouver Royals respectively with the squads and coaches going over to compete for these teams. Wolves ended up winning the one and only season the league played.',
    },
    {
      fact: "New Zealand were the only unbeaten team in the 2010 World Cup. New Zealand's three draws weren't enough to see them out of their group, unfortunately. Spain won the tournament in the end but capitulated in their opening game, losing 1-0 to Switzerland. Fascinatingly too, Spain only scored eight goals across the seven matches of the tournament, winning every knockout game 1-0. Strange to think, given the romanticism of the side's tiki-taka and wealth of attacking talent. ",
    },
    {
      fact: 'Robert Earnshaw is the only player to have scored a hat-trick in all three divisions of the English Football League, the Premier League, the League Cup, FA Cup, and for his country at International level. His first hat-trick came in the FA Cup for Cardiff City against Bristol Rovers in November 2000; a month later, he netted three against Torquay United in what is now League Two. In September 2002, he scored his first League Cup hat-trick for Cardiff against Boston United, and in November of that year, he scored another three against Queens Park Rangers for his first League One hat-trick. ',
    },
    {
      fact: ' In 1941, Rapid Vienna won the German championship. In fact, that Bundesliga title means that Rapid Vienna have actually won more German titles than Bayer Leverkusen... awkward. ',
    },
    {
      fact: 'Mark Hughes once played for Wales and Bayern Munich in the same day. Hughes joined Bayern Munich in November 1987 on a season-long loan from Barcelona. Manager Uli Hoeness sorted the two games in a day for him, apparently. ',
    },
    {
      fact: "The Brunei national team used to enter Malaysian club competitions and won the Malaysian Cup in 1999. The Brunei national football team is young compared to some members of FIFA and have never reached a World Cup - in fact, they didn't even enter the qualifiers in their early days. They've been consistently invited into Malaysian cup competitions, though and went as far as winning a tournament in 1999 - which was a shock to everyone. ",
    },
    {
      fact: 'David Beckham was born at Whipps Cross hospital. The aptly-named hospital is just north of Leytonstone.',
    },
    {
      fact: "Samuel Eto'o won consecutive trebles in 2009 and 2010 with Barcelona and Inter Milan. Zlatan Ibrahimovic swapped Inter in 2009 for Barcelona in 2010 as part of Eto’o clearly getting the better end of the deal.",
    },
    {
      fact: "Luka Modric and Mark Viduka are cousins. Viduka's father, Joe, was from Croatia, from where he emigrated to Australia in the 1960s. ",
    },
  ]
  const randomFactIndex = Math.floor(Math.random() * randomFacts.length)
  res.status(200).json(randomFacts[randomFactIndex])
}
