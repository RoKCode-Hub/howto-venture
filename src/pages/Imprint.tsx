import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Imprint = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-6 py-24 max-w-4xl">
        <h1 className="text-4xl font-bold text-primary mb-8">Imprint</h1>
        
        <section className="prose prose-lg max-w-none space-y-8 text-foreground">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Information in accordance with section 5 TMG</h2>
            <p className="text-base">
              Robin Klimmt<br />
              HowTo Venture<br />
              Wartenburgstraße 1D<br />
              10963 Berlin
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Contact</h2>
            <p className="text-base">
              Telephone: +49 30 21958991<br />
              E-Mail: kontakt@howto-venture.com<br />
              Website: www.howto-venture.com
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">VAT number</h2>
            <p className="text-base">
              VAT identification number in accordance with section 27 a of the German VAT act<br />
              DE313745604
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Disclaimer</h2>
            
            <h3 className="text-xl font-semibold text-primary mt-6 mb-2">Accountability for content</h3>
            <p className="text-base">
              The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents' accuracy, completeness or topicality. According to statutory provisions, we are furthermore responsible for our own content on these web pages. In this context, please note that we are accordingly not obliged to monitor merely the transmitted or saved information of third parties, or investigate circumstances pointing to illegal activity. Our obligations to remove or block the use of information under generally applicable laws remain unaffected by this as per §§ 8 to 10 of the Telemedia Act (TMG).
            </p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-2">Accountability for links</h3>
            <p className="text-base">
              Responsibility for the content of external links (to web pages of third parties) lies solely with the operators of the linked pages. No violations were evident to us at the time of linking. Should any legal infringement become known to us, we will remove the respective link immediately.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-2">Copyright</h3>
            <p className="text-base">
              Our web pages and their contents are subject to German copyright law. Unless expressly permitted by law (§ 44a et seq. of the copyright law), every form of utilizing, reproducing or processing works subject to copyright protection on our web pages requires the prior consent of the respective owner of the rights. Individual reproductions of a work are allowed only for private use, so must not serve either directly or indirectly for earnings. Unauthorized utilization of copyrighted works is punishable (§ 106 of the copyright law).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Online Dispute Resolution</h2>
            <p className="text-base">
              Online Dispute Resolution according to "Art. 14 Abs. 1 ODR-VO": The European Commission provides a platform for online dispute resolution, which you can access here:{" "}
              <a 
                href="http://ec.europa.eu/consumers/odr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                http://ec.europa.eu/consumers/odr
              </a>
            </p>
          </div>
        </section>

        <div className="mt-12">
          <Link to="/" className="text-accent hover:underline">
            ← Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Imprint;
