<template>
  <div class="all">
    <div class="nome">GuiDevloper</div>
    <div class="row r1">
      <div class="column c1"></div>
      <div class="column c2"></div>
    </div>
    <div class="row r2">
      <div class="post c-1o3 m-1o1"
        :class="{mostrado: show.description}">
        <div class="blur">
          <img src="../assets/img/shapes.jpg" height="100%">
        </div>
        <div class="text">
          <p class="author"> {{ titulo }} </p>
          <p class="postText"> {{ subTitulo }} </p>
          <div id="btns" :class="{list: !show.project}">
            <a v-for="op of options" :key="op[0]"
              @click="op[1].indexOf('Ver') === -1 ? openProject(op[0]) : ''"
              v-html="op[1]" :target="op[2]"
              :style="[!show.project ?
                {backgroundImage: `url(${imgs[op[0] < 2 ? op[0]*2 : 2][1]})`} : '']"
              :href="parse(op[3])">a</a>
          </div>
        </div>
      </div>
      <div class="column c1" :class="{borrado: show.description}">
        <p class="type">Design está em tudo</p>
        <div class="neon n1"></div>
        <div class="image">
          <svg xmlns="http://www.w3.org/2000/svg" class="i1" viewBox="0 0 144 149"><title>Triangulo amarelo</title><path d="M110 10l27 132-127-41 100-91m3-10l-7 6L6 97l-6 6 8 3 128 41 8 2-2-8-9-46-18-86-2-9z" class="cls-1"/><path d="M110 10l28 132-128-41z" class="cls-2"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="i2" viewBox="0 0 33 115"><title>Traço verde</title><path d="M10 111c-4-10-5-20-3-30a37 37 0 0 1 6-14l10-11c13-15 13-36 6-54-2-4-8-2-6 2 4 9 6 20 4 31a37 37 0 0 1-7 15l-9 10C-2 75-2 95 4 113c1 3 7 2 6-2z" class="cls-1"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="i3" viewBox="0 -20 228 235"><title>Triangulo azul</title><path d="M27 10l91 77L6 128 27 10M24 0l-2 9L1 127l-1 8 8-3 89-32 23-8 8-3-7-5-31-27L30 6l-6-6z" class="cls-1"/><path d="M27 9l91 78L6 127 27 9z" class="cls-2"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="i4" viewBox="0 0 112 112"><title>Circulo vermelho</title><path d="M56 5a51 51 0 1 1-18 3 51 51 0 0 1 18-3m0-5a56 56 0 1 0 31 10A56 56 0 0 0 56 0z" class="cls-1"/><circle cx="56" cy="56" r="51" class="cls-2" transform="rotate(-19 56 56)"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="i5" viewBox="0 0 112 112"><title>Quadrado marrom</title><path d="M80 6l26 74-74 26L6 32 80 6m3-6l-5 2L5 28l-5 1 2 5 26 74 1 4 5-1 74-26 4-2-1-5L85 5l-2-5z" class="cls-1"/><path d="M6 32L80 6l26 74-74 26z" class="cls-2"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="i6" viewBox="0 0 66 99"><title>Traço azul</title><path d="M65 93c-9-5-18-12-23-21a37 37 0 0 1-5-15V42C36 23 22 8 5 0 1-1-2 4 2 5c9 5 17 11 23 20s6 18 6 28c0 20 14 36 31 45 3 2 6-3 3-5z" class="cls-1"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="i7" viewBox="0 -20 228 235"><title>Triangulo verde</title><path d="M27 10l91 77L6 128 27 10M24 0l-2 9L4 111l-3 16-1 8 8-3 112-40 8-3-7-5-74-64L30 6l-6-6z" class="cls-1"/><path d="M27 10l91 77L6 128 27 10z" class="cls-2"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="i8" viewBox="0 -20 200 150"><title>Quadrado azul</title><path d="M34 6l84 28-28 84L6 90 34 6m-3-6l-2 5L2 89l-2 4 5 2 84 27 4 2 2-5 27-84 2-4-5-2L35 2l-4-2z" class="cls-1"/><path d="M6 90L34 6l84 28-28 83z" class="cls-2"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="i9" viewBox="0 0 112 112"><title>Circulo vermelho e amarelo</title><path d="M56 5a51 51 0 1 1-18 3 51 51 0 0 1 18-3m0-5a56 56 0 1 0 31 10A56 56 0 0 0 56 0z" class="cls-1"/><circle cx="56" cy="56" r="51" class="cls-2" transform="rotate(-19 56 56)"/><circle cx="56" cy="56" r="51" class="cls-3" transform="rotate(-19 56 56)"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="i10" viewBox="0 0 93 96"><title>Traço vermelho</title><path d="M6 94c3-11 8-22 17-30a42 42 0 0 1 14-9l16-4c22-6 35-26 40-47 0-4-5-6-6-2-3 12-7 23-16 31-8 9-18 12-30 14C19 52 5 72 0 93c-1 3 5 5 6 1z" class="cls-1"/></svg>
        </div>
      </div>
      <div id="menu">
        <div class="menu">
          <div id="item1" @click="openWorks(0)">Trabalhos</div>
          <div></div>
          <div></div>
        </div>
        <div class="logo-center">
          <svg xmlns="http://www.w3.org/2000/svg" id="img-logo" viewBox="0 0 130.1 146.3"><defs><clipPath id="clip-path"><path d="M51.2 16A61.9 61.9 0 0 1 75 21.2a19.6 19.6 0 0 1 5.7 3.6c3.7 3.4 4.1 7.6 1.1 11.7a34.8 34.8 0 0 1-15.7 11.7 57 57 0 0 1-50.7-4.5 10.6 10.6 0 0 1-2.7-2.2c-3-3.4-3.1-7.3-.1-10.8s7-5.8 11.1-8A58.8 58.8 0 0 1 51.2 16z" class="cls-1"/></clipPath><clipPath id="clip-path-2"><path d="M13.7 49.4l4.1-31.5h60.4l4.1 31.5H13.7z" class="cls-1"/></clipPath><clipPath id="clip-path-3"><path d="M65.8 99.7l3-29 15.5-7.2-3 29-15.5 7.2z" class="cls-1"/></clipPath><clipPath id="clip-path-4"><path d="M20.1 92l-6-25.2H34L40 92H20z" class="cls-1"/></clipPath><filter id="dropshadow"><feGaussianBlur in="SourceAlpha" stdDeviation="1"/><feOffset dx="2" dy="2" result="offsetblur"/><feFlood flood-color="rgba(0,0,0,0.5)"/><feComposite in2="offsetblur" operator="in"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><g id="Normal_Code" data-name="Normal Code"><path d="M47.3 56.2c-10.1.3-19.1-2.9-27.9-7a65.8 65.8 0 0 1-14.7-9c-5.2-4.5-6.3-11.3-2.1-16.5A65.4 65.4 0 0 1 37.3 1.2a38.5 38.5 0 0 1 21.5.7c8.1 2.6 16.4 4.8 24 8.8a20.9 20.9 0 0 1 7.7 6.1 10.3 10.3 0 0 1 1.1 10.8 43.2 43.2 0 0 1-13 17.2 48.4 48.4 0 0 1-31.3 11.4z" class="cls-2"/><path d="M52 126.3c-7.9 0-16-4-23.6-8.7-4.7-3-8.8-6.5-11.6-11.4-1.8-3.3-2-7-2.7-10.6C10 76.4 7 57 1 38.3c-1.5-4.9-1.7-9.5.7-14A24.1 24.1 0 0 1 8.3 17 93 93 0 0 1 30.6 3.3a41 41 0 0 1 27.2-1.8 133.2 133.2 0 0 1 26 9.8A20.6 20.6 0 0 1 89 15 13 13 0 0 1 92.6 28C91 34.6 91.3 41.5 91 48.3c0 1 .7 1.2 1.5 1.5l14.5 5.3a20.5 20.5 0 0 1 4.6 2.7c3.6 2.5 5.7 5.8 5.6 10.5-.2 5-.4 9.9-1.7 14.7-2.7 10-9.6 15.7-19.5 17.8-2 .5-4 1.1-6 1.4a4.6 4.6 0 0 0-3.7 2.7 41.5 41.5 0 0 1-9.6 12.4c-6.6 5.9-14.3 9-24.6 9zm53.8-49.6c.4-4-1.4-7-4.6-9.3a29.4 29.4 0 0 0-9.4-4.3c-1.2-.3-1.6 0-1.6 1.2L90 75v13.4c0 .8-.1 1.8 1.1 1.8 4 0 7.8-.2 11.5-1.8a4.3 4.3 0 0 0 3-4c0-1.7 0-3.5.2-5.7v-2.1z" filter="url(#dropshadow)" class="cls-2"/><path fill="#daa662" d="M90.7 63.5c4-.1 9.2 2.5 12 5.5 2.4 2.8 3 6.5 3 10.2 0 2.9.1 6.7-2.5 8.6-3.3 2.4-9.1 2.2-13 2-.5 0-.5.6 0 .7 4 .2 10.8.4 14-2.5 2.2-2 2.2-5.6 2.2-8.2 0-4.5-.3-8.6-3.8-11.8a18 18 0 0 0-12-5.2c-.4 0-.5.8 0 .7z"/><path fill="#523035" d="M51.2 16A61.9 61.9 0 0 1 75 21.2a19.6 19.6 0 0 1 5.7 3.6c3.7 3.4 4.1 7.6 1.1 11.7a34.8 34.8 0 0 1-15.7 11.7 57 57 0 0 1-50.7-4.5 10.6 10.6 0 0 1-2.7-2.2c-3-3.4-3.1-7.3-.1-10.8s7-5.8 11.1-8A58.8 58.8 0 0 1 51.2 16z" opacity=".8"/><g clip-path="url(#clip-path)"><g clip-path="url(#clip-path-2)" opacity=".7"><path d="M44.8 17.9H34.4v1.8h10.3v-1.8" class="cls-9"/><path d="M66.4 17.9H45.7v1.8h20.9l-.2-1.8" class="cls-10"/><path d="M27.6 23.8H17l-.2 2h10.7l.1-2" class="cls-9"/><path d="M49.9 23.8H28.6l-.2 2H50v-2" class="cls-11"/><path d="M67 23.8H51v2h16v-2" class="cls-12"/><path d="M42.1 26.9H20.6l-.3 2h21.8v-2" class="cls-11"/><path d="M72.7 26.9H43.2v2h29.7l-.2-2" class="cls-12"/><path d="M27.1 30H16.2l-.3 2h11l.2-2" class="cls-9"/><path d="M42 33.3H19.8l-.2 2h22.3v-2" class="cls-11"/><path d="M58.7 33.3H43v2h15.8l-.1-2" class="cls-12"/><path d="M76.8 33.3H59.6l.1 2H77l-.2-2" class="cls-13"/><path d="M72.7 20.8H17.5l-.2 1.9H73l-.2-1.9" class="cls-14"/><path d="M57.3 36.6H35l-.1 2h22.6v-2" class="cls-13"/><path d="M34 36.6H19.4l-.2 2h14.6l.2-2" class="cls-12"/><path d="M65.8 40H19l-.3 2.1H66l-.1-2.1" class="cls-14"/><path d="M79 23.8H67.8l.1 2h11.3l-.3-2" class="cls-13"/><path d="M30 43.5H18.6l-.3 2.2h11.6l.1-2.2" class="cls-9"/><path d="M48.6 43.5H31.1l-.2 2.2h17.7v-2.2" class="cls-10"/><path d="M72.3 43.5h-23v2.2h23.2l-.2-2.2" class="cls-13"/><path d="M66.3 47h-48l-.3 2.4h48.5l-.2-2.3" class="cls-11"/></g></g><g clip-path="url(#clip-path-3)"><path fill="#daa663" d="M76.4 67.2a11.2 11.2 0 0 0-1.6 1 15.8 15.8 0 0 0-5.3 6.7 22.3 22.3 0 0 0-2 9.4v4.9c0 3.3.8 5.5 2.2 6.6a3.7 3.7 0 0 0 4.1.2 10.2 10.2 0 0 0 1.4-.8 18 18 0 0 0 4.3-4.1 16.7 16.7 0 0 0 2.3-4v-9.4L75 82.3v1.8l5-3.5.2 6.8a11.8 11.8 0 0 1-1.9 3 15.3 15.3 0 0 1-3.2 3 7.5 7.5 0 0 1-1.1.6 2.8 2.8 0 0 1-3.3-.3q-1.7-1.5-1.7-5.6v-4.9a19.3 19.3 0 0 1 1.5-7.7 12.1 12.1 0 0 1 4.2-5.5 10.8 10.8 0 0 1 1.3-.8 2.6 2.6 0 0 1 2.4-.2c.9.5 1.4 1.6 1.7 3.2l1.4-1v-.1q-.3-3.2-2-4.1a3.5 3.5 0 0 0-3.2.2"/></g><g clip-path="url(#clip-path-4)"><path d="M20.8 67a4 4 0 0 0-4.1 3 5 5 0 0 1 .6 0c2 0 7.3.7 10 7.9 2.7 7 7.9 7.7 9.9 7.7h.7c.6-8.4-9-15.2-9-15.3a16.1 16.1 0 0 0-8-3.1" class="cls-18"/><path d="M16.7 70a4 4 0 0 1 4.1-2.9c1.8 0 4.4.8 8.1 3.1.1 0 9.6 7 9 15.4h-.7c-2 0-7.2-.7-9.9-7.8s-8-7.9-10-7.9a5 5 0 0 0-.6 0m4-3a4.1 4.1 0 0 0-4.3 3.1v.1h.1a5.8 5.8 0 0 1 .8 0c2 0 7.2.8 9.8 7.8 2.8 7.2 8.1 8 10.1 8a7.4 7.4 0 0 0 .8 0v-.2C38.8 77 29 70 29 70a16.4 16.4 0 0 0-8.2-3.1" class="cls-19"/><path d="M16.9 73.2a6.7 6.7 0 0 0-.8 0c-.5 8.5 9 15.3 9 15.4a16 16 0 0 0 8.1 3 4 4 0 0 0 4.2-2.8h-.7c-2 0-7.3-.7-10-7.9-2.6-7-7.8-7.7-9.8-7.7" class="cls-18"/><path d="M33.3 91.7a16 16 0 0 1-8.1-3c-.1-.1-9.7-7-9-15.4a6.7 6.7 0 0 1 .7 0c2 0 7.2.7 9.9 7.7 2.6 7.2 8 8 10 8h.6a4 4 0 0 1-4.1 2.8M16.8 73a6 6 0 0 0-.8 0c-.7 8.8 9 15.8 9.1 15.8 3.7 2.4 6.4 3.2 8.2 3.2a4.1 4.1 0 0 0 4.3-3.2v-.1a6 6 0 0 1-.9 0c-2 0-7.1-.7-9.8-7.7-2.7-7.3-8-8-10.1-8" class="cls-19"/></g></g></svg>
          <p class="t-menu">Menu</p>
        </div>
      </div>
      <div class="column c2">
        <div class="bg-r">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1409 2749"><path d="M110 10c-1-1-10 22-19 47a1336 1336 0 0 0-52 168 648 648 0 0 0-9 366c14 59 27 80 44 128 32 93 38 169 43 243 7 94 12 167-11 260-19 77-45 114-62 220-3 23-9 59-10 105-4 229 91 267 77 527-6 117-30 127-37 246-4 63 12 218 64 422l1264-3-3-2731-1289 2z" class="cls-2"/><path d="M104 4a1600 1600 0 0 0-21 52l-21 58c-17 53-31 107-43 161a642 642 0 0 0 36 416 741 741 0 0 1 43 159c8 50 11 102 14 153 4 55 6 112-3 167-7 45-21 89-36 132s-28 87-35 133c-14 88-16 177 3 265 15 68 41 133 54 202 16 91 15 188-6 278-16 69-26 136-21 207 6 91 23 181 42 270l21 87a8 8 0 0 0 7 5l986-2 278-1a8 8 0 0 0 7-7v-617l-1-703-1-668V83 11 7a8 8 0 0 0-8-7h-128L964 1 592 2H112c-1 0-4 0 0 0-10-2-14 13-4 15 11 2 24 0 36 0h401l372-1 323-1h157a10 10 0 0 1 2 0l-7-7v670l1 654 1 705v702l8-8-986 2-278 1 7 6c-25-100-46-202-57-305-8-70-9-139 6-209 7-35 17-70 21-106a795 795 0 0 0 3-156c-6-72-27-141-47-210a680 680 0 0 1-2-390c10-38 25-75 37-113a582 582 0 0 0 24-154c2-53-3-107-7-160-4-49-9-98-20-146-12-49-30-94-47-140-34-90-48-189-38-284 6-54 20-108 33-160A1344 1344 0 0 1 93 70l12-30a1154 1154 0 0 1 10-25c6-7-4-18-11-11z" class="cls-2"/></svg>
        </div>
        <img v-for="(img, i) of imgs" :key="img[1]"
          :class="['img-pro' + img[0], { direitado: toBool(i) }]"
          :src="imgs[i][1]">
        <div id="colr" :class="{direitado: show.project}">
          <div class="codes">
            <div v-for="(code, i) of codes" :key="code[0][0]"
              :class="{ up: i == 0 ? upMargin : false }">
              <p v-for="c of code" :key="c[0]"
                :class="[{ cd: i < 5 }, c[0]]"
                v-text="c[1]">
              </p>
            </div>
          </div>
          <div class="neon"></div>
          <div class="neon n2">
            <img class="Dev-center" src="../assets/img/GuiDevloper.png">
          </div>
          <p class="type tw">Código também</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hello",
  data: function() {
    return {
      show: {
        description: false,
        project: false,
      },
      titulo: "Projetos",
      subTitulo: "",
      options1: [
        [
          [0, 'The Sea', false],
          [1, 'The Inspiration', false],
          [2, 'The Dreamity', false],
          [3, 'The Portfolio', false]
        ],
        [
          [0, `<-`],
          [1, 'Ver no GitHub', '_blank', 'https://github.com/guidevloper/'],
          [2, 'Ver Online', '_blank', 'https://guidevloper.github.io/']
        ]
      ],
      options: [],
      anterior: 0,
      descriptions: [
        `Actually i work with diverse tools and
        continually learn others, in ancient i has edit images in Photoshop
        and create some films with After Effects. Now i am focused to craft
        my criativity in Illustrator and too code my ideas using JS, SCSS,
        PHP, MySQL and eventually Gulp.js to optimize my workflow between
        compilations and rebuilds.`,
        `Actually i work with diverse tools and
        continually learn others, in ancient i has edit images in Photoshop
        and create some films with After Effects.`
      ],
      upMargin: false,
      codes: [
        [
          ["cd1 red", "Guilherme"],
          ["cd2", "Correia ou GuiDevloper"]
        ],
        [
          ["cd3 grey", "desde pequeno se via transformando"]
        ],
        [
          ["cd4 red", "coisas,"]
        ],
        [
          ["cd5 blue", "desmontando brinquedos"],
          ["cd6 green", "e os"],
          ["cd7 red", "estudando"]
        ],
        [
          ["cd8 blue", "percebia que"],
          ["cd9 green", "eles tinham novos usos,"]
        ],
        [
          ["cd10 red", "estimulando"]
        ],
        [
          ["cd11 blue", "a criatividade"],
          ["cd12 green", "que logo receberia"],
          ["cd13 yellow", "um alvo"]
        ],
        [
          ["cd16 grey", "ao se formar um técnico em informática."]
        ],
        [
          ["cd17 red", "Desde"],
          ["cd18", "então soube o caminho"],
          ["cd19 yellow", "que seria necessário seguir"]
        ],
        [
          ["cd20 blue", "a fim de expressar sua paixão criativa"]
        ],
        [
          ["cd21 red", "por desenvolvimento"]
        ]
      ],
      imgs: [
        [1, "/img/TheSea.34953e45.jpg"], [2, "/img/TheSea2.f70b81b5.jpg"],
        [1, "/img/Inspiration-d.f81d39da.jpg"], [2, "/img/Inspiration-w.170dfdd3.jpg"]
      ]
    };
  },
  created: function() {
    this.options = this.options1[0];
    /*for (let [i, img] of this.imgs.entries()) {
      this.imgs[i][1] = this.bring(img[1]);
    }
    console.log(this.imgs);*/
  },
  methods: {
    openWorks(key) {
      // inverte showDesc
      this.show.description = !this.show.description;
      this.restart();
      this.show.project = false;
      this.options1[0][this.anterior][2] = false;
    },
    openProject(key) {
      // inverte showProj
      this.show.project = !this.show.project;
      if (this.show.project) {
        // troca subT pela desc
        this.subTitulo = this.descriptions[key];
        // troca title
        this.titulo = this.options1[0][key][1];
        // troca options pela especifica
        this.options = this.options1[1];
        this.anterior = key;
        this.options1[0][key][2] = true;
      }
      else {
        this.restart();
        this.options1[0][this.anterior][2] = false;
      }
    },
    restart() {
      this.subTitulo = "";
      this.titulo = "Projetos";
      this.options = this.options1[0];
    },
    parse(op = '') {
      return op.indexOf('/') !== -1 ?
        `${op + this.titulo.replace(' ', '')}` : null;
    },
    toBool(i) {
      // Sendo par, diminui caso != 0
      i = i%2 == 0 ? (i==0 ? 0 : --i) :
      // sendo impar, diminui a divisão arredondada
        i - Math.round(i/2);
      // retorna booleano armazenado
      return !this.options1[0][i][2];
    },
    bring(file) {
      return require(`@/assets/img/${file}.jpg`);
    }
  },
  mounted: function() {
    var tis = this;
    setInterval(function() {
      tis.upMargin = true;
      var last = tis.codes[0];
      setTimeout(() => { tis.codes.shift() }, 780);
      setTimeout(function() {
        tis.codes.push(last);
        tis.upMargin = false;
      }, 800);
    }, 5000);
  }
};
</script>

<style scoped lang="scss">
.all {
  margin-bottom: 1vh;
  min-height: 98vh;
  height: 790px;
}
.back-inicial-anim {
  transform: translateX(-100%) translateY(0px) translateZ(0px) scaleX(1)
    scaleY(1) scaleZ(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skewX(0deg)
    skewY(0deg);
}
$black: #20272f;
$white: #e5e5e5;
$darken: #405165;
.type {
  font-family: "Special Elite", Raleway;
  font-size: 2rem;
  color: $darken;
  position: absolute;
  margin: 120px 5%;
  z-index: 5;
  text-shadow: 15px 8px 10px rgba(0, 0, 0, 0.2);
  padding: 0 5% 5% 0;
  &.tw {
    margin: 730px 0 0 5%;
    color: inherit;
    text-shadow: 15px 8px 10px #171717;
  }
}

.mostrado {
  margin-left: 10% !important;
  margin-right: 0 !important;
  /*opacity: 1 !important;
  display: block !important;*/
}
.borrado {
  filter: blur(1px);
}
.direitado {
  margin-left: 100vw !important;
}
.img-pro1, .img-pro2 {
  width: 40%;
  z-index: 8;
  position: absolute;
  left: 0;
  margin: 5% 0 0 7%;
  border-radius: 10px;
  max-width: 540px;
}
.img-pro2 {
  margin-top: 31%;
}

.image {
  z-index: -3;
  text-align: justify;
  svg {
    height: 10%;
    position: absolute;
    filter: drop-shadow(5px 5px 4px rgba(57, 60, 62, 0.5));
  }
  .cls-2, .cls-3 {
    transform: scale(1.02) translate(-1px, -1px);
  }
  .cls-1 {
    fill: $darken;
  }
  .i1 {
    margin: 2vw 0 0 2vw;
    .cls-2 {
      fill: #c5a76f;
    }
  }
  .i2 {
    margin: 13vh 0 0 20%;
    height: 5%;
    .cls-1 {
      fill: #76a880;
    }
  }
  .i3 {
    margin: 6vh 0 0 35%;
    height: 8%;
    .cls-2 {
      fill: #54769b;
    }
  }
  .i4 {
    margin: 40vh 0 0 4%;
    height: 6%;
    .cls-2 {
      fill: #c35b53;
    }
  }
  .i5 {
    margin: 40vh 0 0 25%;
    .cls-2 {
      fill: #654344;
    }
  }
  .i6 {
    margin: 45vh 0 0 40%;
    height: 6%;
    .cls-1 {
      fill: #54769b;
    }
  }
  .i7 {
    margin: 65vh 0 0 5%;
    height: 10%;
    .cls-2 {
      fill: #76a880;
    }
  }
  .i8 {
    margin: 65vh 0 0 25%;
    height: 8%;
    .cls-2 {
      fill: #54769b;
    }
  }
  .i9 {
    margin: 76vh 0 0 40%;
    height: 7%;
    .cls-2 {
      fill: #c5a76f;
    }
    .cls-3 {
      fill: #76a880;
    }
  }
  .i10 {
    margin: 85vh 0 0 10%;
    height: 7%;
    .cls-1 {
      fill: #c35b53;
    }
  }
}

.codes {
  z-index: 1;
  position: absolute;
  height: 200px;
  width: auto;
  margin: 50px 0 0 5%;
  overflow: hidden;
  .up {
    margin-top: -40%;
  }
  .cd {
    background: transparent !important;
  }
  p {
    float: left;
    margin: 0 3px;
    width: auto !important;
    transition: .5s;
  }
  div {
    height: 17px;
    margin: 4px 3px;
    float: left;
    font-size: 0.8rem;
    transition: 4s;
    width: 100%;
  }
  .cd8,
  .cd11,
  .cd14,
  .cd16,
  .cd17,
  .cd20 {
    margin-left: 30px;
  }
  $red: #c35b53;
  $brown: #654344;
  $grey: #91969a;
  $blue: #517194;
  $green: #73a17b;
  $yellow: #c0a36d;
  $cd18: #b08169;
  $class-colors: ('red', 'cd2', 'grey', 'blue', 'green', 'yellow', 'cd18');
  $colors: ($red, $brown, $grey, $blue, $green, $yellow, $cd18);
  // percorrendo lists
  @each $class in $class-colors {
    // index atual
    $i: index($class-colors, $class);
    // valor
		$color: nth($colors, $i);
    .#{$class} {
      background-color: $color;
      color: $color;
    }
  }
}

.post {
  height: 620px;
  margin: 60px 10%;
  position: absolute;
  padding-right: 0px !important;
  z-index: 5;
  //opacity: 0;
  transition: all 700ms;
  //display: none;
  margin-left: -100vw;
  .blur {
    position: absolute;
    height: 95%;
    width: 94%;
    overflow: hidden;
    background: #e5e5e5;
    img {
      filter: blur(6px);
      opacity: 0.95;
    }
  }
  p {
    padding: 20px;
  }
  .text {
    position: relative;
    background: rgba(250, 250, 250, 0.4);
    box-shadow: 10px 10px 20px rgba(32, 39, 47, 0.1);
    color: #252525;
    height: 95%;
    width: 94%;
  }
  .author {
    font-size: 1.3rem;
    font-weight: 600;
    padding-bottom: 0;
    color: #3b699b;
  }
  .postText {
    text-align: justify;
    line-height: 1.6rem;
    padding: 8%;
    color: #143a61;
    max-height: 70%;
  }
  #btns {
    height: 60px;
    width: 94%;
    margin: 3%;
    bottom: 0;
    position: absolute;
    display: flex;
    transition: 250ms;
    p, a {
      color: #e5e5e5;
      background-color: #20272f;
      transition: 400ms;
      cursor: pointer;
      border-radius: 0px;
      flex: 1;
      font-weight: 600;
      padding: 0px;
      padding-top: 9px;
      &:hover {
        color: #20272f;
        background-color: transparent;
      }
    }
    &.list {
      height: auto;
      max-height: 60%;
      top: 50px;
      flex-direction: column;
      p, a {
        background-image: url(/img/TheSea.34953e45.jpg);
        background-color: transparent;
        background-position: 0 100px;
        background-size: cover;
        background-repeat: no-repeat;
        color: inherit;
        padding: 20px 0;
        overflow: hidden;
        flex: 1 0 auto;
        &:hover {
          color: #e5e5e5;
          background-size: cover;
          background-position: center;
          background-blend-mode: lighten;
        }
      }
      /*a:nth-child(1):hover {
        background-image: url('../assets/img/TheSea.jpg');
      }
      a:nth-child(2):hover {
        background-image: url('../assets/img/Inspiration-d.jpg');
      }*/
    }
  }
}

.column {
  float: left;
  min-height: 100vh;
  height: 810px;
  width: 100%;
  position: absolute;
}
.r1 .c1,
.r1 .c2 {
  width: 50%;
  background: #ff9e67;
  height: 100%;
  border-radius: 0;
}
$neon-color: "rgba(240, 74, 74";
.neon {
  position: absolute;
  width: 20%;
  height: 450px;
  margin-top: 200px;
  margin-left: 20%;
  border: 4px solid #{$neon-color + ", 1)"};
  box-shadow: 0 0 40px 0px #{$neon-color + ", 0.2)"};
  filter: blur(1px);
  border-radius: 10px;
  z-index: 2;
  &.n1 {
    width: 30%;
    height: 320px;
    margin-top: 70px;
    margin-left: 10%;
    border-radius: 300px;
    box-shadow: 7px 7px 20px rgba(0, 0, 0, 0.1);
  }
  &.n2 {
    /* box-shadow: inset 0 0 100px 0 #ff1a1a, 0 0 100px 0px #d52020; */
    filter: none;
    overflow: hidden;
    background: rgba(18, 22, 27, 0.6);
  }
}
.row {
  position: absolute;
  width: 100%;
  min-height: 100vh;
  height: 810px;
}
.r1 {
  z-index: 6;
  display: none;
  height: 100vh;
  width: 100vw;
  position: fixed !important;
  margin-top: -8px;
}
.r2 {
  .c1 {
    z-index: 1;
  }
  .c2 {
    overflow: hidden;
    margin-left: 50%;
  }
  .c2, #colr, .img-pro1, .img-pro2 {
    transition: all 400ms;
  }
}
.nome,
.t-menu {
  color: #c35b53;
  font-family: "Great Vibes";
}
.nome {
  position: absolute;
  z-index: 7;
  margin: 250px 0 0 40%;
  font-size: 70px;
  font-weight: 700;
  opacity: 0;
  display: none;
}
.t-menu {
  margin-top: -10px;
  font-weight: bold;
  font-size: 20px;
}
.Dev-center {
  height: 130%;
  margin: 50px 0 0 -30px;
  z-index: -1;
  position: relative;
}
.logo-center,
.menu {
  z-index: 2;
  cursor: pointer;
  box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.3);
}
.logo-center {
  width: 90px;
  height: 90px;
  margin: 15px 5px;
  border-radius: 100%;
  overflow: hidden;
  background: #e5e5e5;
}
.menu {
  height: 100px;
  width: 100px;
  background: linear-gradient(rgba(215, 65, 119, 0.8),
    rgba(255, 233, 138, 0.8));
  position: fixed;
  border-radius: 100px;
  margin-top: -10px;
  transition: 250ms ease-in;
  display: flex;
  flex-direction: column;
  div {
    flex: 1;
  }
}
#menu {
  margin: 0 47vw;
  z-index: 10;
  width: 120px;
  height: 55vh;
  position: fixed;
  display: flex;
  align-items: flex-end;
  &:hover .menu {
    height: 50vh;
  }
}

@import '../assets/CSS/breakpoints';

@include for-greater-desktop {
  .img-pro2 {
    margin-top: 430px;
    margin-top: calc(420px + 2%);
  }
}

// for tablet landscaped style
@include for-tablet-landscape {
  .neon {
    width: 25%;
    &.n1 {
      margin-top: 70px;
      margin-left: 8%;
    }
  }
  .code div {
    font-size: 0.7rem;
    .cd8, .cd11, .cd14, .cd16, .cd17, .cd20 {
      margin-left: 20px;
    }
  }
}

// for tablet styles
  .t-menu {
    @include for-tablet-portrait {
      font-size: 18px;
    }
  }
  .type {
    @include for-tablet-portrait {
      font-size: 4vw;
    }
  }

// for phone and tablet styles
@include for-phone-tablet {
  .all {
    height: 960px;
  }
  .r2 {
    .c1 {
      height: 600px;
      position: absolute;
    }
    .c2 {
      margin: 0;
      height: 530px;
      margin-top: 480px;
    }
  }
  .row {
    position: static;
  }
  .column {
    width: 100%;
    position: absolute;
  }
  .neon {
    width: 50%;
    height: 300px;
    margin-top: 130px;
    margin-left: 45%;
    max-width: 200px;
  }
  #menu {
    margin: 0;
    right: 0;
    width: 85px;
    .t-menu {
      font-size: 16px;
    }
  }
  .menu {
    height: 80px;
    width: 80px;
    top: 15px;
  }
  .logo-center {
    height: 70px;
    width: 70px;
    top: -5px;
    position: absolute;
  }
  .post {
    height: 400px;
    width: 85%;
    .blur {
      width: 94%;
    }
  }
  .codes {
    height: 200px;
    margin: 60px 0 0 3%;
    div {
      height: auto;
      margin: 0px;
      font-size: 12px;
    }
    .cd8, .cd11, .cd14, .cd16, .cd17, .cd20 {
      margin-left: 10px;
    }
    p {
      margin: 3px;
    }
  }
  .img-pro1, .img-pro2 {
    width: 85%;
    max-width: 400px;
  }
  .img-pro1 {
    margin-top: 50px;
  }
  .img-pro2 {
    margin-top: 250px;
    margin-left: 30%;
  }
  .type {
    font-size: 1.5rem;
    &.tw {
      margin: 400px 0 0 5%;
    }
  }
  .image {
    .i2 {margin: 100px 0 0 45%;}
    .i3 {margin: 20px 0 0 80%;}
    .i4 {margin: 190px 0 0 5%;}
    .i5 {margin: 250px 0 0 35%;}
    .i6 {margin: 150px 0 0 85%;}
    .i7 {margin: 350px 0 0 5%;}
    .i8 {margin: 420px 0 0 45%;}
    .i9 {margin: 340px 0 0 85%;}
    .i10 {margin: 500px 0 0 10%;}
  }
}

// for phone styles
@include for-phone {
  .neon {
    &.n1 {
      width: 50vw;
      height: 50vw;
    }
    .Dev-center {
      height: 120%;
    }
  }
  body {
    width: 100vw;
    overflow-x: hidden;
  }
  .img-pro2 {
    margin-top: 250px;
    margin-left: 10%;
  }
}
// back
  .bg-l,
  .bg-r {
    position: absolute;
    margin-bottom: -5px;
    img, svg {
      flex: 1;
    }
  }
  .bg-r {
    z-index: 0;
    background: linear-gradient(to left, $black 70%, transparent 50%);
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    display: none;
    svg {
      .cls-2{fill:$black}
    }
  }
  .bg-r {
    @include for-phone-tablet {
      transform: rotate(90deg);
      margin-left: 200px;
      margin-top: -250px;
      width: 500px;
      height: 1000px;
      overflow: hidden;
      display: flex;
      svg {
        min-height: auto;
        height: 1000px;
      }
    }
  }

#img-logo {
  height: 70%;
  margin: 8% 25% 0;
  .cls-1 {
    fill: none;
  }
  .cls-2 {
    fill: #c54845;
  }
  .cls-3 {
    fill: #daa662;
  }
  .cls-4 {
    fill: #523035;
    opacity: 0.8;
  }
  .cls-5 {
    clip-path: url(#clip-path);
  }
  .cls-6 {
    opacity: 0.7;
  }
  .cls-7 {
    isolation: isolate;
  }
  .cls-8 {
    clip-path: url(#clip-path-2);
  }
  .cls-9 {
    fill: #b95a51;
  }
  .cls-10 {
    fill: #b08168;
  }
  .cls-11 {
    fill: #517194;
  }
  .cls-12 {
    fill: #73a17b;
  }
  .cls-13 {
    fill: #c0a36d;
  }
  .cls-14 {
    fill: #91969a;
  }
  .cls-15 {
    clip-path: url(#clip-path-3);
  }
  .cls-16 {
    fill: #daa663;
  }
  .cls-17 {
    clip-path: url(#clip-path-4);
  }
  .cls-18 {
    fill: #6d4045;
  }
  .cls-19 {
    fill: #6b3f44;
  }
  .cuplogo {
    filter: url(#dropshadow);
  }
}
</style>
