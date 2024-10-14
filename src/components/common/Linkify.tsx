import React from 'react';

interface LinkifyProps {
  text: string;
  linkClassName?: string;
}

export const Linkify: React.FC<LinkifyProps> = ({
  text,
  linkClassName = '',
}) => {
  // Combined regular expression for URLs and email addresses
  const linkRegex =
    /(https?:\/\/|www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)|([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;

  // Function to create links
  const createLink = (content: string) => {
    const isEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+$/.test(
      content,
    );
    const href = isEmail
      ? `mailto:${content}`
      : content.startsWith('http')
      ? content
      : `https://${content}`;

    return (
      <a
        key={href}
        href={href}
        target={isEmail ? '_self' : '_blank'}
        rel={isEmail ? '' : 'noopener noreferrer'}
        className={linkClassName}
      >
        {content}
      </a>
    );
  };

  // Split the text into parts
  const parts: Array<string | JSX.Element> = [];
  let lastIndex = 0;

  // Process matches
  let match;
  while ((match = linkRegex.exec(text)) !== null) {
    if (lastIndex < match.index) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(createLink(match[0]));
    lastIndex = linkRegex.lastIndex;
  }

  // Add any remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return <>{parts}</>;
};
