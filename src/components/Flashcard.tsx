import { useEffect, useRef, useState } from 'react';
import './Flashcard.css';
import ClipboardJS from 'clipboard';

function Flashcard({ word, definition }:{ word: string, definition: string }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!(navigator.clipboard && navigator.clipboard.writeText)) {
      const buttonElement = buttonRef.current;

      if (buttonElement) {
        const clipboard = new ClipboardJS(buttonElement, {
          text: () => definition,
        });

        clipboard.on('success', () => {
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 3000);
        });

        clipboard.on('error', (e) => {
          console.error('Erro ao copiar:', e.action);
        });
      }
    }
  });

  const handleClick = () => {
    const selection = window.getSelection();
    if (selection?.toString().length === 0) {
      setIsFlipped(!isFlipped);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      setIsFlipped(!isFlipped);
    }
  };

  const handleCopyClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(definition).then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 3000);
      });
    }
  };

  return (
    <div
      className={ `flashcard ${isFlipped ? 'flipped' : ''}` }
      onClick={ handleClick }
      onKeyDown={ handleKeyDown }
      role="button"
      tabIndex={ 0 }
      aria-label="flashcard"
    >
      <div className="front">
        <p>{word}</p>
      </div>
      <div className="back">
        <p>{definition}</p>
        <div className="icons">
          <button className="listen" onClick={ () => {} }>Listen</button>
          <button ref={ buttonRef } className="copy-label" onClick={ handleCopyClick }>
            {isCopied ? 'Copied' : 'Copy'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
