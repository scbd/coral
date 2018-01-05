<template>
  <section>
    <div class="grid">
      <div class="title-grid">

          <div class="title-holder"><h1 class="title">{{title}}</h1></div>
          <div class="svg-holder">
            <slot ></slot>
          </div>
          <svg  width="100%" height="2em" class="bar" :style="{fill:color}"  xmlns="http://www.w3.org/2000/svg">
            <title>Title Under Line Illustration</title>
            <rect x="0" y="0" width="100%" height="2em"/>
          </svg>
      </div>
      <div  >
        <p class="description">{{description}}</p>
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
  .title-holder {
    position: relative;
  }
  .title-holder h1{
    position: absolute;
    bottom: 0;
  }
  .svg-holder{
    position: relative;
    max-height: 134px;
  }
  .title-grid{
    display: grid;
    grid-template-columns: 1fr .3fr;
  }
  .bar{
    grid-column: 1 /3;
    grid-row: 2;
  }
  .description{
    background-color: #fff;
    box-shadow: 0 2px 3px hsla(0,0%,4%,.1), 0 0 0 1px hsla(0,0%,4%,.1);
    color: #4a4a4a;
    max-width: 100%;
    position: relative;
    font-size: 1em;
    margin: 10px 10px 10px 10px;
    padding: 10px 10px 10px 10px;
  }
  .grid{
    display: grid;
    grid-template-columns: 1fr ;
  }
  /* .page{
    padding: 15px 15px 15px 20px;
  } */


    .title-holder h1{
      font-size: 2em;
      padding: 10px 10px 10px 10px;
    }



  @media screen and (min-width: 768px) and (max-width: 1023px) {
    .title-holder h1{
      font-size: 2.5em;
    }
    .description{
      font-size: 1.3em;
    }
  }

  @media (min-width:1024px){
    .description{
      font-size: 1.3em;
    }
    .title-holder h1{
      font-size: 2em
    }
    .svg-holder{
      position: relative;
      max-height: 134px;
    }
    .grid{
      display: grid;
      grid-template-columns: 1fr 3fr;
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
      font-size: 2.3em
    }

  }

  @media screen and (min-width: 1408px) {
    .title-holder h1{
      position: absolute;
      bottom: 0;
      font-size: 2.3em
    }
  }
</style>
