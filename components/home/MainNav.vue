<template>
<section>
  <div class="columns main-level" >
    <div class="columns is-mobile is-hidden-desktop is-hidden-tablet" >
      <div class="column is-one-half-mobile" >
        <nuxt-link class="home-links is-size-5-mobile" :to="`${BASE_PATH}about`">
          <div class="main-menu about-style" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 164.92 115"  preserveAspectRatio="xMinYMid meet" class="svg-content">
              <title>About Coral Reefs Icon</title>
                <g  data-name="About Layer">
                  <path class="about-style" d="M10.31,106.51H154.62a3.44,3.44,0,0,0,3.44-3.44V13.74A13.76,13.76,0,0,0,144.31,0H20.62A13.76,13.76,0,0,0,6.87,13.74v89.33A3.43,3.43,0,0,0,10.31,106.51ZM20.62,13.74H144.31V89.33H20.62Z"/>
                  <path class="about-style" d="M161.49,113.38H99.64a3.43,3.43,0,0,0-3.44,3.44v3.44H68.72v-3.44a3.44,3.44,0,0,0-3.44-3.44H3.44A3.43,3.43,0,0,0,0,116.82v6.87A10.32,10.32,0,0,0,10.31,134H154.62a10.32,10.32,0,0,0,10.31-10.31v-6.87A3.44,3.44,0,0,0,161.49,113.38Z"/>
                </g>
            </svg>
            <br  />
            {{ $t('about') }}
          </div>
        </nuxt-link>
      </div>
      <div class="column is-one-half-mobile" >
        <nuxt-link class="home-links is-size-5-mobile" :to="`${BASE_PATH}commitments`" >
          <div class="main-menu comm-style ">
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" preserveAspectRatio="xMinYMid meet" class="svg-content">
                <title>Commitments Icon</title>
                <path class="comm-style" d="M2 42h24v4H2zm8.49-25.858l5.658-5.657L44.432 38.77l-5.657 5.656zM24.627 2.006L35.94 13.32l-5.656 5.656L18.97 7.663zm-16.97 16.97L18.97 30.29l-5.656 5.657L2 24.633z"/>
              </svg>
              <br  />
              {{ $t('gCFCR') }}
          </div>
        </nuxt-link>
      </div>
    </div>

    <div class="columns main-level is-mobile is-hidden-desktop is-hidden-tablet" >
        <div class="column is-half-mobile" >
          <nuxt-link class="home-links is-size-5-mobile" :to="`${BASE_PATH}initiatives`">
            <div class="main-menu initistives-style">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115 130" preserveAspectRatio="xMidYMin meet" class="svg-content">
                <title>Initiatives Icon</title>
                  <path class="initistives-style" d="M50.2,97.69A47.49,47.49,0,1,0,2.71,50.2,47.54,47.54,0,0,0,50.2,97.69Z"/>
                  <path class="initistives-style" d="M95.63,95.63A64.27,64.27,0,0,0,97.5,6.84l2.08-2.08a2.79,2.79,0,1,0-4-3.95l-7.9,7.9a2.79,2.79,0,0,0,3.95,4l1.87-1.88A58.58,58.58,0,0,1,10.79,93.56l1.88-1.88a2.79,2.79,0,0,0-3.95-4L.82,95.63a2.79,2.79,0,1,0,4,3.95L6.84,97.5a63.91,63.91,0,0,0,37.77,16.65v3.38A58.15,58.15,0,0,0,15.1,129a2.79,2.79,0,0,0,1.67,5H83.62a2.79,2.79,0,0,0,1.67-5,58.17,58.17,0,0,0-29.51-11.44v-3.38A64,64,0,0,0,95.63,95.63Z"/>
              </svg>
              <br  />
              {{ $t('global&RegionalIniatives') }}
            </div>
          </nuxt-link>
        </div>
        <div class="column is-one-half-mobile" >
          <nuxt-link class="home-links is-size-5-mobile" :to="`${BASE_PATH}actions`">
            <div class="main-menu action-style">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 130"preserveAspectRatio="xMidYMin meet" class="svg-content">
                <title>Action Asset</title>
                  <path class="action-style" d="M44.67,0A44.72,44.72,0,0,0,0,44.67c0,23.7,40.6,85.46,42.34,88.08a2.79,2.79,0,0,0,4.66,0c1.73-2.62,42.34-64.38,42.34-88.08A44.72,44.72,0,0,0,44.67,0Zm0,64.21A19.54,19.54,0,1,1,64.21,44.67,19.57,19.57,0,0,1,44.67,64.21Z"/>
              </svg>
              <br  />
              {{ $t('nationalActions') }}
            </div>
          </nuxt-link>
        </div>
    </div>

    <div class="column is-hidden-mobile" >
      <nuxt-link class="home-links" :to="`${BASE_PATH}about`">
        <div class="main-menu about-style">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 164.92 115"  preserveAspectRatio="xMinYMid meet" class="svg-content">
            <title>About Icon</title>
              <g  data-name="About Layer">
                <path class="about-style" d="M10.31,106.51H154.62a3.44,3.44,0,0,0,3.44-3.44V13.74A13.76,13.76,0,0,0,144.31,0H20.62A13.76,13.76,0,0,0,6.87,13.74v89.33A3.43,3.43,0,0,0,10.31,106.51ZM20.62,13.74H144.31V89.33H20.62Z"/>
                <path class="about-style" d="M161.49,113.38H99.64a3.43,3.43,0,0,0-3.44,3.44v3.44H68.72v-3.44a3.44,3.44,0,0,0-3.44-3.44H3.44A3.43,3.43,0,0,0,0,116.82v6.87A10.32,10.32,0,0,0,10.31,134H154.62a10.32,10.32,0,0,0,10.31-10.31v-6.87A3.44,3.44,0,0,0,161.49,113.38Z"/>
              </g>
          </svg>
          <br  />
          {{ $t('about') }}
        </div>
      </nuxt-link>
    </div>

    <div class="column is-hidden-mobile" >
      <nuxt-link class="home-links" :to="`${BASE_PATH}commitments`">
        <div class="main-menu comm-style">
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" preserveAspectRatio="xMinYMid meet" class="svg-content">
            <title>Commitments Icon</title>
            <path class="comm-style" d="M2 42h24v4H2zm8.49-25.858l5.658-5.657L44.432 38.77l-5.657 5.656zM24.627 2.006L35.94 13.32l-5.656 5.656L18.97 7.663zm-16.97 16.97L18.97 30.29l-5.656 5.657L2 24.633z"/>
          </svg>
          <br  />
          {{ $t('gCFCR') }}
        </div>
      </nuxt-link>
    </div>

    <div class="column is-hidden-mobile" >
      <nuxt-link class="home-links" :to="`${BASE_PATH}initiatives`">
        <div class="main-menu initistives-style">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115 130" preserveAspectRatio="xMidYMin meet" class="svg-content">
            <title>Initiatives Icon</title>
              <path class="initistives-style" d="M50.2,97.69A47.49,47.49,0,1,0,2.71,50.2,47.54,47.54,0,0,0,50.2,97.69Z"/>
              <path class="initistives-style" d="M95.63,95.63A64.27,64.27,0,0,0,97.5,6.84l2.08-2.08a2.79,2.79,0,1,0-4-3.95l-7.9,7.9a2.79,2.79,0,0,0,3.95,4l1.87-1.88A58.58,58.58,0,0,1,10.79,93.56l1.88-1.88a2.79,2.79,0,0,0-3.95-4L.82,95.63a2.79,2.79,0,1,0,4,3.95L6.84,97.5a63.91,63.91,0,0,0,37.77,16.65v3.38A58.15,58.15,0,0,0,15.1,129a2.79,2.79,0,0,0,1.67,5H83.62a2.79,2.79,0,0,0,1.67-5,58.17,58.17,0,0,0-29.51-11.44v-3.38A64,64,0,0,0,95.63,95.63Z"/>
          </svg>
          <br  />
          {{ $t('global&RegionalIniatives') }}
        </div>
      </nuxt-link>
    </div>

    <div class="column is-hidden-mobile" >
      <nuxt-link class="home-links" :to="`${BASE_PATH}actions`">
        <div class="main-menu action-style">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 130"preserveAspectRatio="xMidYMin meet" class="svg-content">
            <title>Action Asset</title>
              <path class="action-style" d="M44.67,0A44.72,44.72,0,0,0,0,44.67c0,23.7,40.6,85.46,42.34,88.08a2.79,2.79,0,0,0,4.66,0c1.73-2.62,42.34-64.38,42.34-88.08A44.72,44.72,0,0,0,44.67,0Zm0,64.21A19.54,19.54,0,1,1,64.21,44.67,19.57,19.57,0,0,1,44.67,64.21Z"/>
          </svg>
          <br  />
          {{ $t('nationalActions') }}
        </div>
      </nuxt-link>
    </div>

    <div class="column" >
      <nuxt-link class="home-links is-size-5-mobile" :to="`${BASE_PATH}resources`">
        <div class="main-menu resources-fill">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115 130" preserveAspectRatio="xMidYMin meet" class="svg-content">
            <title>Resources</title>
              <path class="resources-fill" d="M47.46,97.71a41.8,41.8,0,0,1,64.21-35.36V25.13a2.8,2.8,0,0,0-2.79-2.79H14A8.37,8.37,0,0,1,14,5.58h94.92a2.79,2.79,0,1,0,0-5.58H14A14,14,0,0,0,0,14V120a14,14,0,0,0,14,14H68.53A41.86,41.86,0,0,1,47.46,97.71Z"/>
              <path class="resources-fill" d="M89.33,61.42a36.29,36.29,0,1,0,36.29,36.29A36.33,36.33,0,0,0,89.33,61.42Zm13.14,41.06L91.31,113.63a2.79,2.79,0,0,1-2,.82,2.79,2.79,0,0,1-2-.82L76.19,102.47a2.79,2.79,0,0,1,3.95-3.95l6.4,6.4V83.75a2.79,2.79,0,1,1,5.58,0v21.18l6.4-6.4a2.79,2.79,0,0,1,3.95,3.95Z"/>
              <path class="resources-fill" d="M14,11.17a2.79,2.79,0,0,0,0,5.58h89.33a2.79,2.79,0,0,0,0-5.58Z"/>
          </svg>
          <br  />
          {{ $t('resources') }}
        </div>
      </nuxt-link>
    </div>

  </div>
</section>
</template>

<script>

export default {
  name: 'MainNav',
  data: function () {
      return {
        BASE_PATH:process.env.BASE_PATH?process.env.BASE_PATH+'/' : ''
      }

  },
}
</script>
<style scoped>

.about-style{fill:#00809a; }
.comm-style{fill:#aacfff; }
.initistives-style{fill:#dca3ff; }
.action-style{fill:#ca7680; }
.resources-fill{fill:#d44f83; }

.about-style:hover{fill:#ffffff; }
.comm-style:hover{fill:#ffffff; }
.initistives-style:hover{fill:#ffffff;}
.action-style:hover{fill:#ffffff; }
.resources-fill:hover{fill:#ffffff;}

.about-style:hover svg path {fill:#ffffff; }
.comm-style:hover svg path  {fill:#ffffff; }
.initistives-style:hover svg path  {fill:#ffffff; }
.action-style:hover svg path  {fill:#ffffff; }
.resources-fill:hover svg path  {fill:#ffffff; }

.svg-container {
	display: inline-block;
	position: relative;
	width: 100%;
	vertical-align: middle;
	overflow: hidden;

}
.svg-content {
	width: 80px;
  height: 80px;
  /*float: left;*/
}

.main-menu{

  border-radius: 25px;
  padding: 10px;
  text-align: center;
  width:100%;
  background-color: rgba(0, 0, 0, 0);
}
.main-menu-test{
  background-color: unset;
}
.home-links{
  color: #fff;
  font-weight: bold;
  font-size: 1em;
}
.home-links a {
  text-shadow: 0 1px 0 rgba(255,255,255,0);
  color: #bdbdbd;
  font-family: "Helvetica Neue", Helvetica, sans-serif, Trebuchet MS;
  text-rendering: optimizeLegibility;
  font-size: 14px;
  margin: 0 10px 0 10px;
}
@media (min-width: 768px){
  .column{padding: .5em 1em 1em 1em;}
  .about-style{fill:#00809a; border: 5px solid #00809a;}
  .comm-style{fill:#aacfff; border: 5px solid #aacfff;}
  .initistives-style{fill:#dca3ff; border: 5px solid #dca3ff;}
  .action-style{fill:#ca7680; border: 5px solid #ca7680;}
  .resources-fill{fill:#d44f83; border: 5px solid #d44f83;}

  .about-style:hover{fill:#ffffff; border: 5px solid #ffffff; cursor: pointer;}
  .comm-style:hover{fill:#ffffff; border: 5px solid #ffffff; cursor: pointer;}
  .initistives-style:hover{fill:#ffffff; border: 5px solid #ffffff; cursor: pointer;}
  .action-style:hover{fill:#ffffff; border: 5px solid #ffffff; cursor: pointer;}
  .resources-fill:hover{fill:#ffffff; border: 5px solid #ffffff; cursor: pointer;}

  .svg-content {
    width:50px;
    height:50px
  }
  .home-links{
    font-size: 1.1em;
  }
}
@media (min-width:1120px){
  .column{padding: .5em 1.9em 1.8em 1.9em;}
  .svg-content {
  	width:110px;
    height:110px
  }

}
@media (min-width:1216px){

  .svg-content {
  	width:125px;
    height:125px
  }
}
@media (min-width:1408px){

  .svg-content {
  	width:150px;
    height:150px
  }
}
</style>
