<template>
  <section>

      <TitleDescription
        :title="$t('titleShort')"
        :description="$t('description')"
        color="#fac1ff">
        <InitiativeIcon width="100%" color="#fac1ff"/>
      </TitleDescription>

      <Subtitle>{{$t('globalInitiatives')}}</Subtitle>

      <OrganizatoinGrid class="container is-fullhd">
        <OrganizatoinGridItem
          :title="$t('iyor')"
          url="https://www.iyor2018.org/"
          :image="this.$CBDImage.get('iyor.jpg',355)"
        />
        <OrganizatoinGridItem
          :title="$t('ebsas')"
          url="https://www.cbd.int/ebsa/"
          :image="$CBDImage.get('EBSA_Logo.jpg',100)"
        />
        <OrganizatoinGridItem
          :title="$t('soi')"
          url="https://www.cbd.int/soi/"
          :image="$CBDImage.get('SOI_Logo.jpg',153)"
        />
        <OrganizatoinGridItem
          :title="$t('unepGCRP')"
          url="http://coral.unep.ch/CRU_Home.html"
          :image="$CBDImage.get('unep.jpg',150)"
        />

        <OrganizatoinGridItem
          :title="$t('icri')"
          url="http://www.icriforum.org/"
          :image="$CBDImage.get('icri.jpg',160)"
        />
        <OrganizatoinGridItem
          :title="$t('rrn')"
          url="http://www.reefresilience.org/"
          :image="$CBDImage.get('Reef-Resilience-Network.jpg',230)"
        />
        <OrganizatoinGridItem
          :title="$t('GCRMN')"
          url="https://www.icriforum.org/gcrmn"
          :image="$CBDImage.get('GCRMN.jpg',120)"
        />
        <OrganizatoinGridItem
          :title="$t('obis')"
          url="http://www.iobis.org/"
          :image="$CBDImage.get('obis.jpg',355)"
        />
        <OrganizatoinGridItem
          :title="$t('goaon')"
          url="http://www.goa-on.org/GOA-ON.php"
          :image="$CBDImage.get('GOA-ON_logo.jpg',185)"
        />
        <OrganizatoinGridItem
          :title="$t('rc')"
          url="https://www.ramsar.org/"
          :image="$CBDImage.get('ramsar-logo.jpg',100)"
        />
      </OrganizatoinGrid>

      <Subtitle>{{$t('regionalInitiatives')}}</Subtitle>
      <OrganizatoinGrid class="container is-fullhd">
        <OrganizatoinGridItem
          :title="$t('cti')"
          url="http://www.coraltriangleinitiative.org"
          :image="$CBDImage.get('cti-logo.jpg',355)"
        />
        <OrganizatoinGridItem
          :title="$t('po')"
          url="https://www.conservation.org/where/Pages/pacific-oceanscape.aspx"
          :image="$CBDImage.get('pacific-oceanscape.jpg',355)"
        />
        <OrganizatoinGridItem
          :title="$t('cc')"
          url="http://www.caribbeanchallengeinitiative.org/"
          :image="$CBDImage.get('caribbean-challenge.jpg',100)"
        />
        <OrganizatoinGridItem
          :title="$t('mc')"
          url="http://themicronesiachallenge.blogspot.ca/"

          :image="$CBDImage.get('the-micronesia-challenge-logo.jpg',400)"
        />

      </OrganizatoinGrid>
  </section>
</template>

<script>
  import pageMixin      from '~/modules/mixins/page'
  import InitiativeIcon from '~/components/icons/InitiativeIcon'
  import Subtitle       from '~/components/Subtitle'

  export default {
    name:'about',
    mixins: [pageMixin],

    components: {
      InitiativeIcon,
      Subtitle,
      TitleDescription:()=> import('~/components/default/TitleDescription'),
      OrganizatoinGrid:() => import('~/components/default/OrganizationGrid/OrganizationGrid'), // lazy load component
      OrganizatoinGridItem:() => import('~/components/default/OrganizationGrid/OrganizationGridItem') // lazy load component
    }
  }
</script>
