<template>
  <section>

      <TitleDescription
        :title="$t('titleShort')"
        :description="$t('description')"
        color="#fac1ff">
        <InitiativeIcon width="100%" color="#fac1ff"/>
      </TitleDescription>

      <div class="title"><span >{{$t('globalInitiatives')}}</span></div>

      <OrganizatoinGrid>

        <OrganizatoinGridItem
          :title="$t('ebsas')"
          url="https://www.cbd.int/ebsa/"
          :image="require('~/assets/images/logo/EBSA_Logo.svg')"
        />
        <OrganizatoinGridItem
        :title="$t('soi')"
          url="https://www.cbd.int/soi/"
          :image="require('~/assets/images/logo/SOI_Logo.svg')"
        />
        <OrganizatoinGridItem
        :title="$t('unepGCRP')"
          url="http://coral.unep.ch/CRU_Home.html"
          :image="require('~/assets/images/UNEP_Logo_en.png')"
        />

        <OrganizatoinGridItem
          :title="$t('icri')"
          url="http://www.icriforum.org/"
          image="https://www.icriforum.org//sites/all/themes/icriforum/logo.png"
        />
        <OrganizatoinGridItem
          :title="$t('rrn')"
          url="http://www.reefresilience.org/"
          image="http://www.reefresilience.org/wp-content/uploads/Reef-Resilience-Network.png"
        />
        <OrganizatoinGridItem
          :title="$t('GCRMN')"
          url="https://www.icriforum.org/gcrmn"
          :image="require('~/assets/images/GCRMN_0.jpeg')"
        />
        <OrganizatoinGridItem
          :title="$t('obis')"
          url="http://www.iobis.org/"
          image="http://iobis.org/images/obis_4.png"
        />
        <OrganizatoinGridItem
          :title="$t('goaon')"
          url="http://www.goa-on.org/GOA-ON.php"
          image="http://www.goa-on.org/images/GOA-ON_logo.jpg"
        />
      </OrganizatoinGrid>

      <div class="title"><span >{{$t('regionalInitiatives')}}</span></div>
      <OrganizatoinGrid>
        <OrganizatoinGridItem
          :title="$t('cti')"
          url="http://www.coraltriangleinitiative.org"
          image="http://www.coraltriangleinitiative.org/sites/all/themes/new_ctiff/images/header/cti-logo.png"
        />
        <OrganizatoinGridItem
          :title="$t('po')"
          url="https://www.conservation.org/where/Pages/pacific-oceanscape.aspx"
          image="https://www.conservation.org/SiteCollectionImages/ci_63002536.jpg?RenditionID=7"
        />
        <OrganizatoinGridItem
        :title="$t('cc')"
          url="http://www.caribbeanchallengeinitiative.org/"
          image="http://www.caribbeanchallengeinitiative.org/images/bg_logo.png"
        />
        <OrganizatoinGridItem
        :title="$t('mc')"
          url="http://themicronesiachallenge.blogspot.ca/"
          image="http://1.bp.blogspot.com/-Y9IntaqWUGI/UsokVqh2YxI/AAAAAAAADUk/PoGfo1HZFWs/s1600/WEBSITE%2BHEADER.png"
        />

      </OrganizatoinGrid>
  </section>
</template>

<script>
  import pageMixin from '~/modules/mixins/page'
  import InitiativeIcon from '~/components/icons/InitiativeIcon'

  export default {
    name:'about',
    mixins: [pageMixin],
    components: {
      InitiativeIcon,
      TitleDescription:()=> import('~/components/default/TitleDescription'),
      OrganizatoinGrid:() => import('~/components/default/OrganizationGrid/OrganizationGrid'), // lazy load component
      OrganizatoinGridItem:() => import('~/components/default/OrganizationGrid/OrganizationGridItem') // lazy load component
    }
  }
</script>

<style scoped>
.grid{
  grid-gap: 1em;
}
  .title{
    margin: 20px 0 20px 0;
  }
</style>
