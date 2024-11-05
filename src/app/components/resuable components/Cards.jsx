import Image from "next/image";

export function TestimonialCard({ imageSrc, heading, description }) {
  return (
    <div className=" w-1.6/2 h-auto flex flex-col items-center backdrop-blur-3xl text-center space-y-4 px-1 py-2 mr-10 rounded-md">
      <div className="card-image overflow-hidden border-4 border-white shadow-2xl rounded-full h-24 w-24">
        <Image
          src={imageSrc}
          alt={heading}
          width={100}
          height={100}
          className="w-full h-full"
        />
      </div>
      <h3 className="text-lg font-semibold">{heading}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
}

export const data = [
  {
    imgSrc: "/images/female_champion.jpg",
    heading: "Mario",
    description: "My daughter loves the training program",
  },
  {
    imgSrc: "/images/female_champion.jpg",
    heading: "Susan",
    description:
      "Amina has improved her game since joining the training program",
  },
  {
    imgSrc: "/images/female_champion.jpg",
    heading: "Cyndy",
    description:
      "My daugther has received invitations from scouts since joining the training program",
  },
  {
    imgSrc: "/images/female_champion.jpg",
    heading: "John",
    description:
      "My twin daughters have received invitations from the state soccer team since joining the training program",
  },
];

export const trainingProgramData = [
  {
    img: "/images/one on one session.png",
    title: "One-on-one coaching session",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In temporeeius minus? Libero accusamus eos eius, in minus aut deleniti? Numquam earum doloremque officiis exercitationem ullam natus minustempore",
  },
  {
    img: "/images/group session.png",
    title: "Group session",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In temporeeius minus? Libero accusamus eos eius, in minus aut deleniti? Numquam earum doloremque officiis exercitationem ullam natus minustempore",
  },
  {
    img: "/images/soccer camp.png",
    title: "Soccer camps",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In temporeeius minus? Libero accusamus eos eius, in minus aut deleniti? Numquam earum doloremque officiis exercitationem ullam natus minustempore",
  },
];

export const testimonials = [
  {
    name: "Maria Rodriguez",
    picture: "/images/American_female_player.png",
    position: "Midfielder",
    club: "NYC Falcons",
    comment: "Since I met coach Dominguez, my game has improved significantly"
  },
  {
    name: "Christiana Wu",
    picture: "/images/Asian_female_champion.png",
    position: "Full-back",
    club: "Oxford United W",
    comment: "I wouldn't have been accepted at Oxford United if not for coach Dominguez"
  },
  {
    name: "Megan Adrian",
    picture: "/images/African_female_champion.png",
    position: "Winger",
    club: "Dillions FC",
    comment: "Coach Dominguez is the best! If you're looking to take your game to the next level, he's your best bet"
  },
]
