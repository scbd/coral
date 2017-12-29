<template>
  <section >
    <div class="columns">
      <div class="column is-one-quarter">
        <div>{{$t('titleShort')}}</div>
      </div>
      <div class="column">
        <p>{{$t('description')}}</p>
      </div>
    </div>
    <!--
    <div >
        <div  ><a ></a><h2 >
  Introduction
  </h2> The use of this web site constitutes agreement with the following terms and conditions: <ol >
  <li>The Secretariat of the Convention on Biological Diversity (the &quot;Secretariat&quot;) maintains this web site (the &quot;Site&quot;) as a courtesy to those who may choose to access the Site (&quot;Users&quot;). The information presented herein is for informative purposes only. The Secretariat grants permission to Users to visit the Site and to download and copy the information, documents and materials (collectively, &quot;Materials&quot;) from the Site for the User&#39;s personal, non-commercial use, without any right to resell or redistribute them or to compile or create derivative works therefrom, subject to the terms and conditions outlined below, and also subject to more specific restrictions that may apply to specific Material within this Site.
  <p></p>
  </li><li>The Secretariat administers this Site. All Material on this Site from the Secretariat appears subject to the present Terms and Conditions.
  <p></p>
  </li><li>Unless expressly stated otherwise, the findings, interpretations and conclusions expressed in the Materials on this Site are those of the various Secretariat staff members, consultants and advisers to the same Secretariat who prepared the work and do not necessarily represent the views of the Secretariat or its Parties. </li>
  </ol>
  <p></p>
  <a ></a><h2 >
  Disclaimers
  </h2> Materials provided on this Site are provided &quot;as is&quot;, without warranty of any kind, either express or implied, including, without limitation, warranties of merchantability, fitness for a particular purpose and non-infringement. The Secretariat specifically does not make any warranties or representations as to the accuracy or completeness of any such Materials. The Secretariat periodically adds, changes, improves or updates the Materials on this Site without notice. Under no circumstances shall the Secretariat be liable for any loss, damage, liability or expense incurred or suffered that is claimed to have resulted from the use of this Site, including, without limitation, any fault, error, omission, interruption or delay with respect thereto. The use of this Site is at the User&#39;s sole risk. Under no circumstances, including but not limited to negligence, shall the Secretariat or its affiliates be liable for any direct, indirect, incidental, special or consequential damages, even if the Secretariat has been advised of the possibility of such damages.
  <p></p>
  The User specifically acknowledges and agrees that the Secretariat is not liable for any conduct of any User.
  <p></p>
  This site may contain advice, opinions and statements of various information providers. The Secretariat does not represent or endorse the accuracy or reliability of any advice, opinion, statement or other information provided by any information provider, any User of this Site or any other person or entity. Reliance upon any such advice, opinion, statement, or other information shall also be at the User&#39;s own risk. Neither the Secretariat nor its affiliates, nor any of their respective agents, employees, information providers or content providers, shall be liable to any User or anyone else for any inaccuracy. Error, omission, interruption, deletion, defect, alteration of or use of any content herein, or for its timeliness or completeness, nor shall they be liable for any failure of performance, computer virus or communication line failure, regardless of cause, or for any damages resulting therefrom.
  <p></p>
  As a condition of use of this Site, the User agrees to indemnify the Secretariat and its affiliates from and against any and all actions, claims, losses, damages, liabilities and expenses (including reasonable attorneys&#39; fees) arising out of the User&#39;s use of this Site, including, without limitation, any claims alleging facts that if true would constitute a breach by the User of these Terms and Conditions. If the User is dissatisfied with any Material on this Site or with any of its Terms and Conditions of Use, the User&#39;s sole and exclusive remedy is to discontinue using the Site.
  <p></p>
  This Site may contain links and references to third-party web-sites. The linked sites are not under the control of the Secretariat, and the Secretariat is not responsible for the content of any linked site or any link contained in a linked site. The Secretariat provides these links only as a convenience, and the inclusion of a link or reference does not imply the endorsement of the linked site by the Secretariat. If this Site contains bulletin boards, chat rooms, access to mailing lists or other message or communication facilities (collectively, &quot;Forums&quot;), the User agrees to use the Forums only to send and receive messages and materials that are proper and related to the particular Forum. By way of example and not as a limitation, the User agrees that when using a Forum he or she shall not do any of the following:
  <p></p>
  <ol >
  <li>Defame, abuse, harass, stalk, threaten or otherwise violate the legal rights (such as rights of privacy and publicity) of others;
  <p></p>
  </li><li>Publish, post, distribute or disseminate any defamatory, infringing, obscene, indecent or unlawful material or information;
  <p></p>
  </li><li>Upload or attach files that contain software or other material protected by intellectual property laws (or by rights of privacy and publicity) unless the User owns or controls the rights thereto or has received all consents therefore as may be required by law;
  <p></p>
  </li><li>Upload or attach files that contain viruses, corrupted files or any other similar software or programs that may damage the operation of another&#39;s computer;
  <p></p>
  </li><li>Delete any author attributions, legal notices or proprietary designations or labels in any file that is uploaded;
  <p></p>
  </li><li>Falsify the origin or source of software or other material contained in a file that is uploaded;
  <p></p>
  </li><li>Advertise or offer to sell any goods or services, or conduct or forward surveys, contests or chain letters, or download any file posted by another user of a Forum that the User knows, or reasonably should know, cannot be legally distributed in such manner. </li>
  </ol>
  <p></p>
  The user acknowledges that all Forums and discussion groups are public and not private communications. Further, the User acknowledges that chats, postings, conferences, e-mails and other communications by other Users are not endorsed by the Secretariat , and that such communications shall not be considered to have been reviewed, screened or approved by the Secretariat. The Secretariat reserves the right to remove, for any reason and without limitation, e-mail and bulletin board postings.
  <p></p>
  <a ></a><h2 >
  Preservation of Immunities
  </h2> Nothing herein shall constitute or be considered to be a limitation upon or a waiver of the privileges and immunities of the Secretariat, which are specifically reserved.
  <p></p>
  <a ></a><h2 >
  General
  </h2> The Secretariat reserves its exclusive right in its sole discretion to alter, limit or discontinue the Site or any Materials in any respect. The Secretariat shall have no obligation to take the needs of any User into consideration in connection therewith. The Secretariat reserves the right to deny in its sole discretion any user access to this Site or any portion thereof without notice. No waiver by the Secretariat of any provision of these Terms and Conditions shall be binding except as set forth in writing and signed by its duly authorized representative.
   -->
  </section>
</template>

<script>
import Vue from 'vue'


export default {
  layout: 'default',
  name:'about',
  scrollToTop: true,
  components: {},
  data:()=>{return {
    pageLocales:this.$store.locale.pageMessages.about
  }
  },
  async asyncData ({app,store}) {
    console.log(store)
    let locale = app.i18n.locale
    let newMessages ={}
    let pageLocales = store.locale.pageMessages.about
    if(!pageLocales['en'])
      newMessages.en = await import(`~/locales/pages/about/en.json`)
    if(locale !=='en')
      newMessages[locale] = await import(`~/locales/pages/about/${locale}.json`)

    store.commit('locale/setPageMessage', {page:'about', messages:newMessages})
  },
  // i18n:{messages:Vue.app.$store.locale.pageMessages.about},
  mounted:()=>{console.log('this.pageLocales',Vue)}
}
</script>

<style scoped>

</style>
