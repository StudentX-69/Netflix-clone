

const Cards = () => {
  const cardData = [
    {
      title: 'Enjoy on your TV',
      description: 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.'
    },
    {
      title: 'Download your shows to watch offline',
      description: 'Save your favourites easily and always have something to watch.'
    },
    {
      title: 'Watch everywhere',
      description: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.'
    },
    {
      title:'Create profiles for kids',
      description:'Send kids on adventures with their favourite characters in a space made just for them — free with your membership.'
    }
  ]
  return (
    <div className="flex flex-wrap gap-5">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="h-80 w-62 bg-[#292459] rounded-xl p-6"
        >
          <h2 className="text-white text-lg font-semibold mb-4">
            {card.title}
          </h2>
          <p className="text-white text-sm">
            {card.description}
          </p>
        </div>
      ))}
      
    </div>
  )
}

export default Cards
