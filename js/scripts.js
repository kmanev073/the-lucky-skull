const scContainer1 = document.getElementById('js--sc--container-1');
const scContainer2 = document.getElementById('js--sc--container-2');
const scContainer3 = document.getElementById('js--sc--container-3');
const scContainer4 = document.getElementById('js--sc--container-4');
const scContainer5 = document.getElementById('js--sc--container-5');
const scContainer6 = document.getElementById('js--sc--container-6');

let skullPosition = Math.floor(Math.random() * Math.floor(6));
let outcomes = [0, 0, 0, 0, 0, 0];

outcomes[skullPosition] = 1;

const scratchcardConfig = {
  scratchType: SCRATCH_TYPE.CIRCLE,
  containerWidth: scContainer1.offsetWidth,
  containerHeight: 300,
  brushSrc: '',
  imageBackgroundSrc: '',
  clearZoneRadius: 45  
};

const sc1 = new ScratchCard('#js--sc--container-1', {
  ...scratchcardConfig,
  imageForwardSrc: 'images/bg.jpg',
  htmlBackground: skullPosition === 0 ? `<div class="inner_html"><img width="100%" height="100%" src="images/skull.jpg"></img></div>` : `<div class="inner_html"><p>Try again!</p></div>`,
  callback: function () {
    if (skullPosition === 0) {
      alert('You found it!');
      window.location.reload();
    }
  }
});

const sc2 = new ScratchCard('#js--sc--container-2', {
  ...scratchcardConfig,
  imageForwardSrc: 'images/srb.jpg',
  htmlBackground: skullPosition === 1 ? `<div class="inner_html"><img width="100%" height="100%" src="images/skull.jpg"></img></div>` : `<div class="inner_html"><p>Try again!</p></div>`,
  callback: function () {
    if (skullPosition === 1) {
      alert('You found it!');
      window.location.reload();
    }
  }
});

const sc3 = new ScratchCard('#js--sc--container-3', {
  ...scratchcardConfig,
  imageForwardSrc: 'images/uae.png',
  htmlBackground: skullPosition === 2 ? `<div class="inner_html"><img width="100%" height="100%" src="images/skull.jpg"></img></div>` : `<div class="inner_html"><p>Try again!</p></div>`,
  callback: function () {
    if (skullPosition === 2) {
      alert('You found it!');
      window.location.reload();
    }
  }
});

const sc4 = new ScratchCard('#js--sc--container-4', {
  ...scratchcardConfig,
  imageForwardSrc: 'images/fr.jpg',
  htmlBackground: skullPosition === 3 ? `<div class="inner_html"><img width="100%" height="100%" src="images/skull.jpg"></img></div>` : `<div class="inner_html"><p>Try again!</p></div>`,
  callback: function () {
    if (skullPosition === 3) {
      alert('You found it!');
      window.location.reload();
    }
  }
});

const sc5 = new ScratchCard('#js--sc--container-5', {
  ...scratchcardConfig,
  imageForwardSrc: 'images/tr.jpg',
  htmlBackground: skullPosition === 4 ? `<div class="inner_html"><img width="100%" height="100%" src="images/skull.jpg"></img></div>` : `<div class="inner_html"><p>Try again!</p></div>`,
  callback: function () {
    if (skullPosition === 4) {
      alert('You found it!');
      window.location.reload();
    }
  }
});

const sc6 = new ScratchCard('#js--sc--container-6', {
  ...scratchcardConfig,
  imageForwardSrc: 'images/gr.jpg',
  htmlBackground: skullPosition === 5 ? `<div class="inner_html"><img width="100%" height="100%" src="images/skull.jpg"></img></div>` : `<div class="inner_html"><p>Try again!</p></div>`,
  callback: function () {
    if (skullPosition === 5) {
      alert('You found it!');
      window.location.reload();
    }
  }
});

sc1.init();
sc2.init();
sc3.init();
sc4.init();
sc5.init();
sc6.init();