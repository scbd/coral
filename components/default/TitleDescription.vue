<template>
  <section class="comp-main">
    <div class="container is-fullhd  grid ">
      <div class="title-grid">

          <div class="title-holder"><h1 class="title is-paddingless">{{title}}</h1></div>
          <div class="svg-holder">
            <slot ></slot>
          </div>
          <svg   width="100%"  class="bar" :style="{fill:color}"  xmlns="http://www.w3.org/2000/svg">
            <title>Title Under Line Illustration</title>
            <rect x="0" y="0" width="100%" height="2em"/>
          </svg>
      </div>
      <div  >
        <p class="description">{{description}}</p>
        <slot name="description"></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TitleDescription',
  props: {
      title: {
        type: String,
        default: 'text'
      },
      description: {
          type: String,
          default: 'text'
      },
      color: {
          type: String
      }
  }

}
</script>
<style scoped>
  .title-holder .title{
     word-wrap: normal;
  }
  .comp-main{
    margin:1.3em 0 1.3em 0;

  }
  .title-holder {
    position: relative;
  }
  .title-holder h1{
    position: absolute;
    bottom: 0;
    font-size: 1.7em;
    padding: 10px 10px 10px 10px;
  }
  .svg-holder{
    position: relative;
    max-height: 134px;
  }
  .svg-holder svg{
    position: absolute;
    bottom: 5px;
  }
  .title-grid{
    display: grid;
    grid-template-columns: .7fr .3fr;
    grid-template-rows: 2fr;
    grid-template-rows: minmax(105px, auto);
    overflow: none;
    min-height: 120px;
  }
  .bar{
    grid-column: 1 /3;
    grid-row: 2;
    height: 1em;
  }
  .description{
    background-color: #fff;
    box-shadow: 0 2px 3px hsla(0,0%,4%,.1), 0 0 0 1px hsla(0,0%,4%,.1);
    color: #4a4a4a;
    max-width: 100%;
    position: relative;
    /* font-size: 1em; */
    /* margin: 10px 10px 10px 10px; */
    padding: 0 1em 0 1em;
  }
  .grid{
    display: grid;
    grid-template-columns: 1fr ;
    margin-top: 1em;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {

    .description{
      box-shadow: unset;
    }
    .bar{
      height: 1em;
    }
    .title-grid{
      display: grid;
      grid-template-columns: 1fr .3fr;
      min-height: 145px;
    }
  }

  @media (min-width:1024px){
    .description{
      box-shadow: unset;
      margin-top: 0;
    }
    .title-holder h1{
      position: absolute;
      bottom: 0;
      font-size: 1.6em;
    }
    .svg-holder{
      position: relative;
      max-height: 134px;
    }
    .grid{
      display: grid;
      grid-template-columns: 1.1fr 3.2fr;
      margin-top: 0;
    }
    .title-grid{
      display: grid;
      grid-template-columns: 1fr .3fr;

    }
    .bar{
      grid-column: 1 /3;
      grid-row: 2;

    }
  }

  @media screen and (min-width: 1216px) and (max-width: 1407px) {
    .title-holder h1{
      position: absolute;
      bottom: 0;

    }
    .grid{
      margin-top: 0;
    }
    .title-grid{
      display: grid;
      grid-template-columns: 1fr .3fr;

    }
    .description{
      box-shadow: unset;
      margin-top: 0;
    }

  }

  @media screen and (min-width: 1408px) {
    .title-holder h1{
      position: absolute;
      bottom: 0;

    }
    .grid{
      margin-top: 0;
    }
    .title-grid{
      display: grid;
      grid-template-columns: 1fr .3fr;

    }
    .description{
      box-shadow: unset;
      margin-top: 0;
    }

  }
</style>
