import Vue, { CreateElement, VNode } from 'vue';
import { Component, Prop } from "vue-property-decorator";
import {ILogoComponent} from "./logoItems.interface";

declare module 'vue/types/vue' {
  interface Vue {
    _uid: number
  }
}
@Component
class logoWorldOfTanks extends Vue{
  @Prop({ default: null }) width: string;
  @Prop({ default: null }) height: string;
  @Prop({ default: null }) centerColor: string;
  @Prop({ default: null }) color: string;
  @Prop({ default: null }) bottomColor: string;
  @Prop({ default: null }) background: string;

  render(h: CreateElement): VNode {
    return <div className="rt-logo">
      <svg width={this.width} height={this.height} viewBox="0 0 95 40" version="1.1" xmlns="http://www.w3.org/2000/svg" >
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Logo-partners" transform="translate(-389.000000, -699.000000)" fill={this.color}>
            <g id="Group-5" transform="translate(389.000000, 699.000000)">
              <path d="M8.15679744,31.4055088 L7.37261586,25.0607901 L4.44778629,25.0607901 L3.74255465,31.4055088 L2.99805258,25.0607901 L0,25.0607901 L2.46626538,39.9173354 L5.15751766,39.9173354 L5.98137874,34.5847121 L6.89237112,39.9173354 L9.58075992,39.9173354 L11.8289926,25.0607901 L8.85875654,25.0607901 L8.15679744,31.4055088 Z M93.1318915,32.3225944 C94.0236577,33.1515142 95.1817266,34.7570179 94.9759658,36.4671933 C94.7832953,38.0654505 93.5053697,39.4442996 92.756777,39.7285237 C91.6608863,40.1447952 89.8311293,40.1206402 88.8694126,39.3867301 C87.9031962,38.6495994 87.0895617,37.1403132 87.1112423,35.3089601 L89.9031251,35.2546113 C89.9788025,35.6845707 89.9170334,36.509062 90.4856366,37.00424 C90.6799434,37.1741303 90.8910221,37.2494134 91.0902377,37.2494134 C91.4256727,37.2494134 91.7292005,37.0376544 91.8776918,36.7027048 C92.2360346,35.8951219 91.7758341,35.0182947 91.23832,34.5194935 C89.9984377,33.369312 88.7769634,32.4139809 87.9850096,31.1555044 C87.3926804,30.2154715 87.4012709,29.4811589 87.3759087,28.6393564 C87.3235481,26.9356223 88.5769296,25.6026678 89.5222836,25.2628871 C90.0777967,25.0885684 90.5924031,25 91.0865561,25 C91.3643127,25 91.6359332,25.0281809 91.9038721,25.0833348 C93.1719801,25.3474297 94.17174,26.2266725 94.6433943,27.4815258 C94.8115209,27.9283936 94.7976126,28.6727708 94.8197022,28.8829195 L92.0703624,29.2649714 L91.9300524,28.4581938 C91.8347398,27.9903915 91.5569832,27.701739 91.2452741,27.6477928 C91.2051856,27.6409489 91.1622335,27.6369231 91.1180543,27.6369231 C90.9278381,27.6369231 90.7188048,27.7093881 90.5707225,27.9062515 C90.2475595,28.3362109 90.2999201,28.6188246 90.3203735,28.9755138 C90.3547351,29.5809996 91.0256051,30.4381003 91.3851751,30.7750628 C91.6363423,31.0105742 91.8862822,31.2009963 92.134995,31.4139631 C92.4168422,31.6563185 92.7056436,31.9272573 93.1318915,32.3225944 Z M64.6334157,33.9578893 L65.1709298,30.9252265 L65.6127223,33.9578893 L64.6334157,33.9578893 Z M63.4430305,25.0607901 L63.4107142,25.286237 L60.8642717,39.9173354 L63.8480069,39.9173354 L64.4346091,36.4325711 L65.9542933,36.431766 L66.464809,39.9173354 L69.4567256,39.9173354 L66.9340089,25.0607901 L63.4430305,25.0607901 Z M61.951981,27.9078619 L59.7741079,27.9042386 L59.8117421,39.9173354 L56.9016389,39.9173354 L56.8967301,27.9593926 L56.8967301,27.903836 L54.6558607,27.903836 L54.6558607,25.0607901 L61.951572,25.0607901 L61.951981,27.9078619 Z M75.4004701,31.9212185 L73.185781,25.0607901 L70.1505033,25.0607901 L70.1554121,39.9173354 L73.0409712,39.9173354 L73.0712422,32.8226034 L75.3558818,39.9173354 L78.2463498,39.9173354 L78.2463498,25.0607901 L75.4331955,25.0607901 L75.4004701,31.9212185 Z M51.2098797,39.9173354 L53.2458065,39.9173354 L53.2507153,35.7771649 L55.1463321,35.7771649 L55.1463321,33.9578893 L53.2224897,33.9578893 L53.2224897,32.0134102 L55.8458368,32.0109947 L55.8458368,30.0008944 L51.2201064,30.0089461 L51.2098797,39.9173354 Z M87.5702156,25.0607901 L84.1438697,25.0607901 L82.1337142,29.24605 L82.1324869,25.0607901 L79.2984703,25.0607901 L79.2080664,39.9173354 L82.047401,39.9173354 L82.0613093,33.7058719 L84.4895314,39.9173354 L87.6589831,39.9104915 L84.1365065,31.1695948 L87.5702156,25.0607901 Z M48.186465,37.314632 C48.186465,37.565039 47.9782498,37.7711619 47.722992,37.7711619 C47.4689613,37.7711619 47.2591099,37.5642339 47.2591099,37.314632 L47.2591099,32.2799206 C47.2591099,32.0291109 47.4681432,31.8241958 47.722992,31.8241958 C47.9766135,31.8241958 48.186465,32.0315264 48.186465,32.2799206 L48.186465,37.314632 Z M50.1655315,32.2589862 C50.2514355,30.877319 48.9015142,29.8817296 47.7675803,29.8736779 L47.7450816,29.8736779 C46.2581228,29.8736779 45.3479485,30.9054999 45.3209501,32.2779076 L45.2939517,37.201506 C45.1851398,38.5819654 46.2000352,39.917738 47.6129529,39.917738 L47.6182708,39.9173354 C49.0332338,39.9137122 50.2514355,38.6910656 50.1655315,37.4273554 L50.1655315,32.2589862 Z M25.1424895,30.838671 C25.1424895,31.2774872 24.7342406,31.6365919 24.236815,31.6365919 L23.2431911,31.6365919 L23.2431911,28.0012613 L24.4843006,28.0012613 C24.8115543,28.0012613 25.1424895,28.3712357 25.1424895,28.6598882 L25.1424895,30.838671 Z M26.7083983,33.5464488 C27.139964,33.1036068 27.9441899,32.101576 27.9380539,31.2058273 L27.9302816,30.2118482 L27.9196459,28.5435415 C27.6181634,26.2890729 26.3660091,25.1775394 24.1243216,25.0607901 L20.5543932,25.0607901 L20.5662562,39.9173354 L23.230101,39.9173354 L23.230101,34.5589467 L23.974194,34.5589467 L25.4889693,39.9173354 L28.4902944,39.9173354 L28.3098959,39.2884997 L26.7083983,33.5464488 Z M16.6993451,36.2892514 C16.6993451,36.7349115 16.3180946,37.1004575 15.8517582,37.1004575 C15.3854217,37.1004575 15.0041712,36.7349115 15.0041712,36.2892514 L15.0045802,28.6131885 C15.0045802,28.1663206 15.3854217,27.8015798 15.8517582,27.8015798 C16.3180946,27.8015798 16.6993451,28.1663206 16.6993451,28.6131885 L16.6993451,36.2892514 Z M15.8791656,25.0607901 L15.8677118,25.0607901 C14.3050755,25.0607901 13.5278481,25.8643471 12.9633355,26.524987 C12.4078225,27.1751596 12.2429684,28.1651128 12.2421503,28.8631929 L12.2384687,36.2167863 C12.2376506,37.5251832 12.7473481,38.4217371 13.3544037,38.9310054 C14.2416702,39.6773956 14.7603672,39.8883494 15.8664846,39.917738 C15.9143454,39.9185432 15.9609791,39.9189458 16.0072036,39.9189458 C17.0343711,39.9189458 17.7072864,39.6210338 18.4296988,38.94107 C18.7360901,38.6540279 19.5108631,37.620193 19.5071815,36.4700114 L19.4805922,28.8909712 C19.4728199,26.751239 17.8676407,25.0672315 15.8791656,25.0607901 Z M32.3972941,25.0607901 L29.5563232,25.0607901 L29.542415,39.9173354 L36.0433089,39.9173354 L36.0445361,36.982903 L32.3972941,36.982903 L32.3972941,25.0607901 Z M41.6254382,36.2268509 C41.6254382,36.6588232 41.2883669,37.0118891 40.8760273,37.0118891 L39.8770855,37.0118891 L39.8770855,27.9835476 L40.8760273,27.9835476 C41.2883669,27.9835476 41.6254382,28.3370161 41.6254382,28.7685858 L41.6254382,36.2268509 Z M40.9296151,25.0607901 L37.1514716,25.0607901 L37.0892934,39.9173354 L40.7258997,39.9173354 C43.2420712,39.8939856 44.3592334,37.6717237 44.265148,36.1330489 L44.2847832,28.8780885 C44.3895044,26.6980979 42.7111022,25.0607901 40.9296151,25.0607901 Z" id={`rt${this._uid}-Fill-1`}></path>
              <path d="M52.1961611,15.0281766 L52.1961611,7.3358287 L55.9093983,7.3358287 L55.9093983,16.4820611 L53.0934691,19.3906601 L50.5040015,16.7489317 L50.5040015,16.7439512 L52.1961611,15.0281766 Z M40.0176539,16.9149476 L40.0176539,5.54368678 L44.5781905,0.93176438 L52.5279252,0.93176438 L56.9819396,5.43577643 L56.9819396,16.9253236 L48.505692,25.4971408 L40.0176539,16.9149476 Z M58,17.4009592 L48.5065052,27 L39,17.388093 L39,5.16517047 L44.1077848,0 L53.0121544,0 L58,5.04397885 L58,17.4009592 Z M44.8062784,7.3358287 L44.8062784,15.0281766 L46.5695883,16.7481016 L43.907344,19.3910751 L41.0938543,16.4820611 L41.0938543,7.3358287 L44.8062784,7.3358287 Z M45.0542883,1.76350417 L41.1402037,5.8118025 L46.6086194,5.8118025 L46.6086194,22.10004 L48.5349653,24.0673287 L50.4600916,22.10004 L50.4600916,5.8118025 L55.9305401,5.8118025 L52.0851665,1.76350417 L45.0542883,1.76350417 Z" id={`rt${this._uid}-Fill-3`}></path>
            </g>
          </g>
        </g>
      </svg>
    </div>

  }
}

export const worldOfTanks:ILogoComponent = {
  name: 'worldOfTanks',
  component: logoWorldOfTanks
}