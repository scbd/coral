<template>
  <section class="comp-main">
    <div class="container is-fullhd">
      <div class="level">
        <div class="level-left  cole" >
          <div >
            <div class="level is-mobile is-marginless">
              <h1 class="level-left title-level title is-marginless is-paddingless" >{{title}}</h1>
              <div class="level-right is-marginless title-icon">
                <slot ></slot>
              </div>
            </div>
              <svg   width="100%"  height="1.5em" class="bar" :style="{fill:color}"  xmlns="http://www.w3.org/2000/svg">
                <title>Title Under Line Illustration</title>
                <rect x="0" y="0" width="100%" height="1.5em"/>
              </svg>

          </div>
        </div>
        <div class="description" >
          <p>{{description}}</p>
          <slot name="description"></slot>
        </div>

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
  .comp-main{
    margin-bottom:4em;
  }
  .title-icon{
    width:130px;
  }

  .cole{
    max-width:100%;

    align-self: flex-end;
  }
  .title-level{
    max-width:220px;
    align-self: flex-end;
  }
  .title-icon{
    min-width:100px;
    align-self: flex-end;
  }

  .bar{
    margin-bottom:-9px;
  }
  .description{

    box-shadow: 0 2px 3px hsla(0,0%,4%,.1), 0 0 0 1px hsla(0,0%,4%,.1);
    color: #4a4a4a;
    max-width: 100%;
    margin: 0em 2em 0em 2em;
    padding: 1em 1em 0 1em;

  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    .cole{
      max-width:369px;
    }
    .description{
      box-shadow: none;
      width:100%;
          margin: 0em 0em 0em 0em;
    }
    .bar{
      height: 1em;
    }
    .title-icon{
      min-width:200px;
      margin-bottom:-15px;
      align-self: flex-end;
    }

  }

  @media (min-width:1024px){
    .cole{
      max-width:369px;
    }
    .title-icon{
      min-width:60px;
      margin-bottom:-15px;
      align-self: flex-end;
    }
    .description{
      box-shadow: none;
      margin-top: 0;
      width:100%;
      margin: 0em 0em 0em 0em;
    }

  }
</style>
