module.exports = {
    'query_1': `
      {
        minBlock: blocks(
          orderDirection: asc,
          orderBy: timestamp, 
          first: 1,
          where: { 
            timestamp_gte: 1659082016
          }
        ) {
            number
        }
        maxBlock: blocks(
          orderDirection: desc,
          orderBy: timestamp, 
          first: 1,
          where: { 
            timestamp_lte: 1659686816
          }
        ) {
            number
        }
      }
    `,
    'query_2': `
      {
        blocks(
          where: {
            fromActiveProducer: true, 
          }
          orderDirection: desc
          orderBy: number, 
          skip: 0, 
          first: 5, 
        ) {
          fromActiveProducer,
          timestamp,
          author,
          number,
        }
      }
    `,
    'query_3': `
      {
        blocks(
          where: {number: 15281123}
        ) {
          fromActiveProducer
        }
      }
    `,
    'query_4': `
      {
        networks
          (block: { number: 15281122 })
         {
            slot0 { expirationTime,taxRatePerDay,winningBid,delegate,startTime,oldBid,owner,id },
            slot1 { expirationTime,taxRatePerDay,winningBid,delegate,startTime,oldBid,owner,id },
            slot2 { expirationTime,taxRatePerDay,winningBid,delegate,startTime,oldBid,owner,id }
        }
      }
    `,
    'query_5': `
      {
        stakers(
            where: {
              staked_gte: 100, 
              id_in: [ "0xd160e36097e5fe5ce5c3f02867216845c0a255cd","0xd39c0d8ee9fbb78839cac0630b520b7e2263e126","0xc182bd3c0a96b8765358a54d77d56c2cb1af8aac","0x5e2b6c6b2240d582995537d3fafdb556e4a3822f","0x2a91d154cdcdf08a553017afdcdea398c8b706a6","0x91aae0aafd9d2d730111b395c6871f248d7bd728","0xa6807d794411d9a80bc435dfc4cda0ba0ddde979","0x5eb656432b07fb784c0455e58f865bde2a7fac82","0x8e8f818d3371f797a2db7edb32803607c8b3c6a9","0x1b30c84e244361a99be770acd57ace184983c83d","0xa8e4b4c480f0307b86fea74f7eb2f5f6718f285e","0xfb9779477e5b4834bf2bc02dd29b97b344d0f700","0x26bce6ecb5b10138e4bf14ac0ffcc8727fef3b2e","0x5bdf85216ec1e38d6458c870992a69e38e03f7ef","0x2f294982b9e18693ff7c7f38896229dc5ee44f75","0xff8005c97b181b37f6a654d6df69fa0af60dbd23","0x8a01fa5a77311bbcf29e293d8ecb48707cfdb700","0x3c5883c650d600bd543a9b5c8d9a3a6f5d16b8f4","0x57c7bc8f620d70ce2233ac5d10b8e2a326711a4c","0x9a93235e7c91b957045c810d75ac3148f7860681","0xbec933f54839ed7e9e334f7ed24b834a3a019b1c","0x5ef2ec91bfb917de398d59197b32aa822df146c0","0x4224e6329813569e01cc5f7dd650761aad40ea03","0xf640e31ecdba2238b8360f144bcd331e5c1bb279","0x669c6e78a593a7d7356cd000e8b4c26585f09962","0x461326370a104bdc066807f3276c9e602787191d","0x2dc506ea0f9c70f7287f30e50e076c5400e6e5bc","0x256d8943eb9898981ac2b08595ba95f7a32810fa","0x1c7609b242438b844aab3ee2f7b3b9f233b320d6","0x328f926d1332eb44fae3488bb8f68047ef4cacce","0xa7efae728d2936e78bda97dc267687568dd593f3","0xc5a93444cc4da6efb9e6fc6e5d3cb55a53b52396","0xfbb1b73c4f0bda4f67dca266ce6ef42f520fbb98","0xe54c1880e9e37d4d310ce70514f17f5ce6222b98","0x12ae89bb6ab69e0dfbe08956d7688ae0f518aa20","0x02ef01fbd9f2ce76c13a6f0e4defd1fb5ca8ef61","0xdd5aa963fb8da8c48cd4e919089e0e2e06b165db","0x4ad8d9cf9424b477e77a0d7c339c4de792b92fc6","0xeb6c4be4b92a52e969f4bf405025d997703d5383","0x75e89d5979e4f6fba9f97c104c2f0afb3f1dcb88","0xeb156caa9f0a48300f953b924f4632f39cc929c6","0x88ca9d86e6b0acf2dc49ace80fb9ce8910c986c2","0x576f2c3e74bed2a0f223646625a6308164da9b3a","0x72e5263ff33d2494692d7f94a758aa9f82062f73","0x5ee42438d0d8fc399c94ef3543665e993e847b49","0x3c03ebbd946218dee79a9c0e07ed5c09d2b24298","0xa4ee285d067b11c864ce31e906a3a57863458eb0","0xab762b2c7bd687a2f37c20bb9f72367d9e7c31b7","0x76e40d0a69fd81826b5eb7d18145626d46eafdef","0x1c8f6a5f009e051cab9c3851ca2da2c936b2775a","0xea3697bdffce7de4c66052d081c5c29c93917039","0x6238872a0bd9f0e19073695532a7ed77ce93c69e","0x05cdb1526f6e224e02919a4c018d9784ea25eb3d","0xd816815d7b494751b67f1476259f50d6ae98acd7","0x46340b20830761efd32832a74d7169b29feb9758","0x1b9f02bcf90bfa3da00c4365cc23d1a502b7bc24","0x9aab3f81604c683a1a0d14019fbfe15bef7aa1ee","0x07bc7e41dba86c86a34e38af41d19f06dd5e772f","0xff059d87096d1edf40ab0af9f1bd32efebcfb386","0xad29649f31ddcb99a88502c09d0c973942b02eac","0xd3e6120db19a701abc40bae9614f3ca635abde88","0x5a92731582fc2f0ca82f940cd75c268e0b3d18cc","0xedac4928185f46854a7932b368891238c540068a","0xd6dfe275b407e0b96c0d30eb6f311531b02ecfde","0x89107899991647a7d1a0bf8333e2579750d81a83","0x735da3105346a37c212d66bad6d863571c5e68f2","0x74518d91fa5d31c7b02e0e546cf50fd41376fccf","0x3aa4ea901513e9a0e12669f89afe64732bc35b1d","0xd03a7e84f6a64c3f1d50c90fc9708daeb6a203d7","0x476118a2f90d730a6d106a8aa3133539fda92f32","0x77a235f3064293f4395405f73faa51d0dd441faa","0xa285bcdcf3fe970edd040c302457c6aa3427573f","0xf074b4ae1f93f74874446f1049c4c413e5cc39fd","0x0cbb47991b9b673288b10fc836006a982f1965a0","0xfddd98ab63ecc5012ab1774ca266dacc7eef0865","0x8a3efa2887fc53c8e85553fe846716967aa9beea","0xf897b4ef69d9fe1dec2fe73bc128145558316a15","0x38ca4335d740c5ae53107bd436283d2cd9926d00","0x8d1a3a2f3427ca3fd9fa03ab0b9354bd4f1f6ceb","0x516dcf0ad6b5dbcf469c659f07e560dfa1a417aa","0x1410e8c039e2339c28cb327aa4cda25123d59ca4","0xb722d056bf84ff91c33dd7f6bbed0930e890c364","0xcd29884c0d85242d5a6ea0cb1992d1c5bf3f094a","0xb6ae0ec2b235187dce698476dd64334080c38166","0x33aeebb00b0e55b8facb4c71e5a359b9b47b2209","0xdec13a023f6f66c850f4178e0c2ddb09dfb0ff75","0xf658f17ef324be586e0226557bbf458571bc2715","0x7282c810d6b6532e4c3551e9f6e0e051fe3a3d24","0x26230b5f19f2a00fcbb5bb3ac6113da82caa890d","0xef08793d5e2eeaa774b445d10306daf8e4c30a97","0xebb9fbb15f8b4d50b5b3dca7ae1cc7302ae638b8","0xffd5bf5381641768c1a1d159b9a3c659881e478c","0xa35116c5314c7b36a63082d924b9e73ebff82a79","0x9e64e9809cfdacba5b32153f4b351d231963cfdb","0x2faf487a4414fe77e2327f0bf4ae2a264a776ad2","0xc098b2a3aa256d2140208c3de6543aaef5cd3a94","0x7147333c6d821612577481458e512560bfa12ebd","0xc49eb158b72f1151a821517b6a54504e39221d78","0x020744ec3aae6b6806c25f1abb346a9b77f4eeaf","0xbf52257d5e42e9cf93ec7863e1a57030af9b46dd","0xbf44f843e8a26888f65d262d02a12f5884a7750e","0xef4d425a44a6cc87869f2ac4350e5de3d0413a88","0x03694cbe87378e1a84ec2ef75a3167f15cbd15ed","0x47245cea82b35246a84578d06b9fee96f803b1b1","0x6dfc34609a05bc22319fa4cce1d1e2929548c0d7","0x01872cc9f18772218dbec1a786d1bfc063594909","0x9acbb72cf67103a30333a32cd203459c6a9c3311","0x3ee94742e68a3bfdd64526232c59f4740a64ef69","0xc58e3ecbbd0704cc07ed2aae4d98ae06d41fdfad","0x5ba781326764082d2a74482e92df8ef68290d9de","0x0b7a434782792b539623fd72a428838ea4173b22","0x142c706f99d94f0254f198fd696a29ad56fec609","0x2da950f79d8bd7e7f815e1bbc43ecee2c7e7f5d3","0x22596eec7a0399d1fa9cab32f519ab305162e7fc","0xf1300cc9c2cf347f7902742fec4df9dba952fd7b","0xa6a688f107851131f0e1dce493ebbebfaf99203e","0xe7d98f350edf80a8e550e76bbed995573344f192","0x6d9256d2af6a31c6e34bf956f3de8c7f927aa099","0x5aa6f84274e6feb883ef2489bb1541d1d299adbd","0xef4f8c804cea1c5a18ef627010fdbd5065c3e14a","0x6ebaf477f83e055589c1188bcc6ddccd8c9b131a","0x137df573238c4d5da0c1b7cf806badbcae720097","0x51c38db4ba2c0921def39d74aca30c254286a024","0xb3bd830781f2cf23bf4499b9a7c8c48ef3386851","0x384372c44f7f431d6c3f7adb753d126b2f6cce69","0x817480d181bf6609127b374aced1c6248ff640bb","0x595e60defb0056cf1e0066a8bbe7f29fc684ec4e","0xeff5fea8892a444fe23e259e4aa0cfaa06ec2723","0xb6cd8fcab4240b088562f41dda07d18c276cb8de","0xf6a978ab977615edd6e2299758ae9aedb9c25a7f","0xa4e5961b58dbe487639929643dcb1dc3848daf5e","0x082a3bb73acebb48b5ebfd31ac4f0f86eafe87c7","0xc406063fd711d650b95662d0a6ad0defac70f825","0x22f08829427a4a2f999d4121e856cad88d53474a","0x7563758243a262e96880f178aee7817dcf47ab0f","0xd698c65bc2ae033c5f5272d648be56a7bf36f74e","0x201b800dce66f53a280a04790a8348e920153ba2","0x35f25fda5027fcacd5f5fbfda2044a1375fd2c9e","0xf34f7772c2b20f473815029f448ed459d0d236c4","0x4945ce2d1b5bd904cac839b7fdabafd19cab982b","0x134c1de8dd6238aed8485d9356f02a125dedb41f","0xb2422d57f4d465c0b30282357c8e7ec894475f61","0xcb9d39e759917e63fb2efac9671b260d57da7968","0x7af9c03a26f2c8ded98b6bc96881a3055e3e79a6","0x897a3e5166e8da1fc5fbf075acb75d619a2f67e1","0x714a044dd397315e276098a7031e0dc826e3eaa0","0xb67fb4323495f84968d44f980c60812f82f60278","0x67bd3f3fe35f31e68f34341bda7f032fcb357cc3","0xeecb4720d549dbee0e576987d470bb1ddd477f35","0xab9e4b4580194af45cc5d3e62ff449dfa8ce40ca","0x398cb64f4e9f03cdb3531c9b6a42a025e16183e9","0x22e091333eed4fd5ec370992592b2a70e6042ada","0x8e01d001a2a328e8b5b16520196e539cd2c37cf5","0x4ebdc50d078e31bfdfd4df99c7afd9e33ec82e0a","0xcaf0624d4ab1b0b45aeee977a6008832e5860c93","0x188c1737e827f4e7897bcf8822d4b8a9691395bd","0x358b3be22b3f3e4d2ab9436a0cd58c09fead8fe7","0x750ecb598f3c95d1cacd56e7767096de5cfb0f6f","0x2b01e4d89051257381b00889b16bedc8d9813944","0x721473ed4506b747de12facb6822d628883ededc","0xc7f90cf9033ba51c166002a960bc276274bb7769","0x17221a04d3234a1afb90602b01b9178433482938","0xb4b41251bfac6288a0f7ef6ce7bc42c65d6995d7","0x520fd729dc1565facb170da04330eade4e1c5733","0xf19b7dbe35a225dd7f7834f05c5b712026cedf4c","0xaf1ac404f3025e66694408eb5fe0c05eafccd05b","0xae8e14f82fc2b0a8904e1f0a2b645dee90efce09","0x1f3413dba15647bc2e28e1f59796b14fe95c462e","0x88b8406923e7da62bb5c208f59b9bd4311fe1a10","0xaf5d11cd3c7a89ddc5519033cee02baef7108312","0xd8144e45f814026497c0c9822b26054e3581e36a","0x1c48aa57ce0aece12cb4c07939a44c21b34a9c9b","0xa9c48ed48e5b55a39f580ff259c5d394f259b12a","0xc145414460edba004827e34c9eec61eaccdce237","0x4c1a7fccdba01ef0d4873b2d99c46de9251b8628","0x35cec2b7b609b841012ee9ae0a82486b3f3c1161","0x39dea8ba4e6e09e5402e755306431351416fb364","0x6154cae7243d3e561f44f196d6ac27cc8f337cdb","0x6996ecc37864d8833540b6424a24a66977727dcb","0xebba559a85608bfd13eea312c0f85f375e2f3301","0x8230a4cb486d9ae98710f4eff9d94bbc2f26e771","0x7a0a658d643060354d50dbe709bd6b0c949f417c","0x5b41f660a464631e61fdd1689151796c5f514a08","0x3d4c548b0c3c32088f77f02ce5c00e124393a622","0x133ef36bc0ba8e27e275a6a5cf13ff01f04baff7","0x5354f00292296518713a47777bb6d2b9712fe74a","0x95081b2071cb069989d56817bada7df33bba77b1","0xd9f23f997993020eb67bffc04b43b8d7ddd706bb","0xfb49ed021c81f3dd0eb9abce7072d46c5d3c749e","0x6e1a61d1ebfed848dd916939cf637193bcd8236a","0x0077848134b495926bf74fd4a5836c9aea7dc038","0x5438448626b76d3f3a908c94706da49cf0558a87","0x30b030417871af4e2ffcd1c8a3ada258577ebf44","0x88202aa70e720902fb82de0838771dc3461dcfb1","0x44609982b2e83ca5c348bba453bfa8363e8a2c22","0xdcfb2c5295f2c77e7b9a4736a45ed7eb163c654b","0x73165f6b736638e0205f9df36dc845f75279fd5d","0xad0e3142a17e06db27e529ed82858a6a3fdf67bd","0xae75b29ade678372d77a8b41225654138a7e6ff1","0x2584a7656ffc26b7786655f3ac8f042431841dda","0xbbad96336943a36e3e292d973b3382dd0ba4d1ef","0x6046945c5b5ef5933b8e73a98a6ad7bf3e031df7","0x56de1961fda5454e6f8e6d0e3124ff648fd69400","0x79672062c5a45e3808d6b784129cf3ecf59d4224","0xf55b5c4f54bdcdf839cc4872f78218d8a6bc5fa8","0x98ca4094d1e2cb3e8b2603de0fa7d80a800e64ce","0x7c195d981abfdc3ddecd2ca0fed0958430488e34","0x7830c87c02e56aff27fa8ab1241711331fa86f43","0x3cd751e6b0078be393132286c442345e5dc49699","0xb5d85cbf7cb3ee0d56b3bb207d5fc4b82f43f511","0xf62323e45ef2b99561037b5864592e67d457a12e","0xf8f21a32648a540dd8e982ff47bef6be2e823f9e","0x8136758dac53700f36bf6444635bca0125217bba","0xad33fa68ea908041c1d18501b2d4473832bc8b4a","0x452e2cbb0c0f6df0e47e64db6b5b0fb9e634f6c7","0xbaed383ede0e5d9d72430661f3285daa77e9439f","0x9430801ebaf509ad49202aabc5f5bc6fd8a3daf8","0x55cf8f583c6ab4b9789a8e585ba50aecfe96866e","0x5940284fd7971d8109e7ff8598973cd295acd6c6","0xeb2629a2734e272bcc07bda959863f316f4bd4cf","0x89983197e01dd4f8ab9001fcf1ea32e3c0afb6bc","0x5bb16fccc9834aee6f59e47d297544e529b85a52","0x65f91b422779c0c01ae86fa823b57079121c8dba","0x809c6fc6af3ffb1de4ed20ac37dc4304efd57ff6","0x6c9d8752bcd6b3e8e84b05162cd64ecc6217b002","0x41ba2f310be29aac9c82c178b8332045adb6bb5d","0x3ab28ecedea6cdb6feed398e93ae8c7b316b1182","0x6c251cfd9bc71bf1a897ca5036f36827fcf68f88","0x9f0ab29c361b57c06a6ab4d68b08b6bfae5d1517","0xf90f4933d08d154ebf51910b29be5abeac539925","0xef9e498b2af42379fbc9320a22964278d5b2a98c","0x267be1c1d684f78cb4f6a176c4911b741e4ffdc0","0x5556852d3f634a5a1fc5ee535f0fbedbc4bc05e8","0xddfabcdc4d8ffc6d5beaf154f18b778f892a0740","0x2693dab32c2597861271faab0f74a7f1fc6fb6e1","0x9696f59e4d72e237be84ffd425dcad154bf96976","0xdfd5293d8e347dfe59e90efd55b2956a1343963d","0x21a31ee1afc51d94c2efccaa2092ad1028285549","0x56eddb7aa87536c09ccc2793473599fd21a8b17f","0x4976a4a02f38326660d17bf34b431dc6e2eb2327","0x28c6c06298d514db089934071355e5743bf21d60","0x6908cf68ef131736da29ea886514ae53d00e118b","0x78db235e0a6b4ff9d7d7a0752b581ed9c2ea4c95","0x4c4af50b5336db80546362921549f9e44273b46c","0x70dc018ed4ee160c05f5a97a559e016dfa1c0852","0xc323579307adf07dbe6c3d2d7a44ecbd8c672945","0x077205c2e13f1d696594ef7382ef673a5dfaa52d","0x3ae9d0b74e3968cfcf89a4de4f0d8b2a326a1dfd","0x04a3021a75c86df5595321f69ac489a068e29ff1","0xddeb598fe902a13cc523aaff5240e9988edce170","0xb83383e92173c7fada64b5e715292d6f07d6cb75","0x0eeee52bd7182bf4283a298bd4d0ced0606696f2","0x46ffff746483f10b3542ad99bb58c69a5dea9e5e","0x0dd96f6d267115c6a179da789758a39afa481f39","0x1615b4d5ca85902aa99cc0cdab81dcce692b4780","0x60ec3e2782f12d8276dc5582096320e66df55a29","0xda53b2bcd10825c5d79a15a43067db671fa57c7d","0x416524186e7e5da2bf6a5c9d1bdda5f7023b7ecd","0x535ba1debedd6cc58adacb22853a50169820e3a8","0xb25aa238d465313b5fd49a09ab6d66348eccf1b4","0x655aea83994083778dfb5b2bb49696534861341e","0xe3ced2dddba3d4da47b602e85f3178e88f7e68ce","0x67064df5e4f8eb11143b77c6d12a684789a98d4f","0x11bffb7a4d391b7eae86390eb67c4d9a2e131653","0x39959702f3c8b7a3c5e3d30f9cc69658c09842fd","0x122eef03fca79b78f8920caedae9a35454f76ebb","0x124ab007340f379ad3521143df88c4932a82058e","0x0d41814993ab87e7c88b423f3f0a41f33ae47ecb","0x0cc1dcc011db5e06766b4ab8c237fb115142fd89","0x4cb7ac72e7aadfdf1fcdc4a992a7708d24a81f0d","0x8d196fff1924c2c5b4fe86a10961088d48dc8e6d","0xe5765c402b184b5e923be33421b2e9cbdda66ccf","0x8f8e69de7ffd052ed063c4f4af666f231a6b3593","0x1f00260d77fc01f8e05f6c1f7f1273c6bbe68803","0xef24ef135de822ebee0d70b501cd218cd6de1467","0xb3f1f23e68fc7d2354ed927ac48ec725a7ae36a6","0x8f3a84ff458698de843064ff2c318975abccc303","0x012480c08d20a14cf3cb495e942a94dd926dcc8f" ]
            }, 
            block: { number: 15281122 }
          ) {
            id
            staked
          }
      }
    `
}