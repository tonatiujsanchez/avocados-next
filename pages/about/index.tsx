import Image from "next/image"

const avoFacts = [
    {
        title: 'Most avocados come from Mexico',
        content:
            'While avocados are grown in California and Florida, the majority sold in grocery stores come from south central Mexico. The main reason for the abundance of “south of the border” avocados is that Mexico is blessed with a year-round growing climate. The avocado is believed to have originated in the state of Puebla, Mexico, as far back as 10,000 B.C.',
    },
    {
        title: 'The conquistadors were huge fans.',
        content:
            'Spanish explorers arriving in Mexico during the 16th century survived on avocados and were the first Europeans to consume them. As a result of the Spanish Conquest, avocados spread to South America and Central America. ',
    },
    {
        title: '“Avocado” wasn’t its original name.',
        content:
            'Irishman Sir Hans Sloane called it an avocado in 1696 in a Jamaican-plants catalog. He also dubbed the avocado tree the “alligator pear tree.”',
    },
    {
        title: 'It’s actually a fruit.',
        content:
            'Did you know that an avocado is a fruit? While definitely not sweet, it falls firmly in the fruit-not the vegetable-family. That’s because the avocado tree is part of the flowering-plant family Lauraceae.',
    },
    {
        title: 'Some famous celebrities are avocado farmers.',
        content:
            'Joining the ranks of California’s avocado farmers are actors like Tom Selleck (whose ranch was once owned by actor Dean Martin) and Oscar winner Jamie Foxx. Also on Foxx’s 40-acre ranch? A recording studio!',
    },
    {
        title: 'There are different varieties.',
        content:
            'Avocados’ taste and texture depend on the region they’re from. Florida-grown avocados are lower in fat and firmer, while Hass avocados, from Mexico, are perfect for mashing and whipping.',
    },
    {
        title: 'They’ve one-upped the banana.',
        content:
            'Hard to believe, but it’s true: Avocados have higher levels of potassium than bananas. In fact, the levels are almost double-a single avocado contains 975 milligrams of potassium, compared to 487 milligrams in a banana. So throw avocado spears into your smoothie, why don’t you? Start with this recipe for Green Breakfast Smoothie.',
    },
    {
        title: 'Avocados may help lower your cholesterol.',
        content:
            'Trying to improve your health? Fold more avocados into your diet. A 2015 study by the American Heart Association found that eating an avocado daily can improve LDL cholesterol levels (that’s the bad cholesterol) in people who struggle with obesity or are overweight.',
    },
    {
        title: 'The peel isn’t good for Fido.',
        content:
            'Be sure to toss avocado remains in the garbage (or compost). The skin and pit can be harmful, and even toxic, to cats and dogs. However, most household pets (except birds) can nosh on the creamy green center and not get sick.',
    },
    {
        title: 'You can substitute it for butter.',
        content:
            'In lieu of butter, many vegan bakers use avocado to add moistness to cupcakes, cakes and other baked goods. Want to give it a go? Keep in mind that avocados can give a green hue to the finished dish. For more creative substitutes, check out our favorite recipes with secret ingredients.',
    },
    {
        title: 'There’s a secret trick to ripening them up quick',
        content:
            'Need to ripen that avocado ASAP? Place it in a brown paper bag with a banana or two. The bananas will release ethylene gas, a natural plant hormone that aids in ripening fruit. On the other hand, check out this guide to learn how to store them for later.',
    },
]


const AboutPage = () => {
    return (
        <>
            <section className="container">
                <h1 className="text-center font-semibold text-3xl my-7">13 Surprising Facts About Avocados</h1>
                <figure className="relative w-full">
                    <img
                        src="/images/avocados.jpg"
                        alt="Avocados on a table"
                    />
                    <figcaption className="text-sm text-center text-slate-500 py-2">
                        Originally from{' '}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.tasteofhome.com/article/13-surprising-facts-about-avocados/"
                            className="text-sky-600"
                        >
                            Taste of Home
                        </a>
                    </figcaption>
                </figure>
                <ol className="my-10">
                    {avoFacts.map(({ title, content }) => (
                        <li key={title}>
                            <h3 className="font-semibold text-xl leading-6">{title}</h3>
                            <p className="leading-6">{content}</p>
                        </li>
                    ))}
                </ol>
            </section>
            <style jsx>{`
                ol {
                    list-style: none;

                    // Look ma! Responsive grid with no Media queries :)
                    // https://css-tricks.com/look-ma-no-media-queries-responsive-layouts-using-css-grid/
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    grid-gap: 4.5rem 3rem;

                    // Look ma! A CSS Counter :)
                    // https://moderncss.dev/totally-custom-list-styles/
                    counter-reset: orderedlist;
                }

                li::before {
                  counter-increment: orderedlist;
                  content: counter(orderedlist);
                
                  // Boring stuff
                  position: absolute;
                  top: -43px;
                  left: -5px;
                  color: #cecece;
                  font-size: 5rem;
                  font-weight: bold;
                }
            
                li {
                  position: relative;
                }
                h3:first-child {
                  // why the first-child selector you may ask...
                  // to gain specificity and thus avoid using '!important' :)
                  padding-left: 50px;
                  margin-bottom: 2rem;
                }
                li:nth-child(10) h3{
                    padding-left: 90px;
                }
                li:nth-child(11) h3{
                    padding-left: 90px;
                }
            
            `}</style>
        </>
    )
}

export default AboutPage