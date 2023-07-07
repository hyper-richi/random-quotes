import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons';
import { QuoteType } from '../api/api';
import { useEffect, useState } from 'react';

type BgColorType = {
  backgroundColor: string;
};

type QuotePropType = {
  bgColor: BgColorType;
  quote: QuoteType;
  onClickNextQuote: () => void;
};

const Quote: React.FC<QuotePropType> = (props) => {

  const [show, setShow] = useState(false);
  const { quote, author } = props.quote;

  useEffect(() => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 1000);
  }, [quote]);

  return (
    <div id="quote-box">
      <div className={show ? 'quote fadeIn' : 'quote'}>
        <div className="quote-text ">
          <i className="fa fa-quote-left"></i>
          <span id="text">{quote}</span>
        </div>
        <div className="quote-author">
          <span id="author">{author}</span>
        </div>
      </div>

      <div className="buttons">
        <a
          className="button"
          id="tweet-quote"
          style={props.bgColor}
          title="Tweet this quote!"
          target="_top"
          href={
            `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=` +
            `${encodeURIComponent('"' + quote + '" ' + author)}`
          }
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          className="button"
          id="tumblr-quote"
          style={props.bgColor}
          title="Post this quote on tumblr!"
          target="_blank"
          href={
            `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=` +
            `${encodeURIComponent(author)}` +
            '&content=' +
            `${encodeURIComponent(quote)}` +
            '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
          }
        >
          <FontAwesomeIcon icon={faTumblr} />
        </a>
        <button
          onClick={() => {
            props.onClickNextQuote();
          }}
          style={props.bgColor}
          className="button"
          id="new-quote"
        >
          New quote
        </button>
      </div>
    </div>
  );
};

export default Quote;
