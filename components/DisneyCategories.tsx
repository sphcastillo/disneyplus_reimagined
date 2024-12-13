const Categories = [
    {
        id: 1,
        title: "Disney",
        alt: "Disney",
    },
    {
        id: 2,
        title: "Pixar",
        alt: "Pixar",
    },
    {
        id: 3,
        title: "Marvel",
        alt: "Marvel",
    },
    {
        id: 4,
        title: "Star Wars",
        alt: "Star Wars",
    },
    {
        id: 5,
        title: "National Geographic",
        alt: "National Geographic",
    },
    {
        id: 6,
        title: "Hulu",
        alt: "Hulu",
    },
    {
        id: 7,
        title: 'ESPN',
        alt: 'ESPN',
    }
];

function DisneyCategories() {
  return (
    <div className="flex flex-wrap justify-center space-x-3">
        {Categories.map((category, index) => (
            <div className="text-white" key={index}>
                <span>{category.title}</span>
            </div>
        ))}
    </div>
  )
}
export default DisneyCategories