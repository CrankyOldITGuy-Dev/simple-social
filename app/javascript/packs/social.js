import $ from 'jquery';

function socialToggle() {
  const social = document.getElementById("social");
  const button = document.getElementById("social-btn");
  social.classList.toggle('hidden');
  button.classList.toggle('hidden');
}

$(() =>
    $('button#social-btn').on('click', () => socialToggle())
);

$(() =>
    $('button#social-close').on('click', () => socialToggle())
);

$(() =>
    $('#fb-btn').on('click', () => socialToggle())
);

$(() =>
    $('#twitter-btn').on('click', () => socialToggle())
);

$(() =>
    $('#reddit-btn').on('click', () => socialToggle())
);
