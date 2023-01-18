import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Round up number to nearest multiple of 5
  function roundNearestFive(num) {
    return (Math.ceil(num / 5) * 5) / 5;
  }

  // Round up number to nearest multiple of 5
  function roundNearestTen(num) {
    return (Math.ceil(num / 10) * 10) / 10;
  }

  // Display article length in minutes
  function showReadMinutes(min) {
    // Number of emojis to displayed depending on mins length functionality
    if (min < 30) {
      let emojiNo = roundNearestFive(min);
      let coffee = "☕️ ";
      let multiCoffee = coffee.repeat(emojiNo).trimEnd();
      return (
        <span>
          {multiCoffee}&nbsp; {min} min read
        </span>
      );
    } else if (min >= 30) {
      let emojiNo = roundNearestTen(min);
      let bento = "🍱 ";
      let multiBento = bento.repeat(emojiNo).trimEnd();
      return (
        <span>
          {multiBento}&nbsp; {min} min read
        </span>
      );
    }
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date}
        &nbsp; &nbsp;
        <span>.</span>
        &nbsp; &nbsp;
        {showReadMinutes(minutes)}
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;