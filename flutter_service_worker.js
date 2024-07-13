'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "f86f5e5dbd064932f0288e621f09f37d",
".git/config": "ec07b8d9df606014c977889fb4579e19",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "27b35a7faf254f10dcd17dd7dd1ce235",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a8a99b192c54c4bdb6477f2c8f025d0f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b4887fd86af3e8eea178a32143570b29",
".git/logs/refs/heads/main": "8bc6589318a02453467035915df49bc8",
".git/logs/refs/remotes/origin/main": "4439939b956891f080c9cfb281fe338b",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/01/5b7ba78b68e2a6dc64e86b47cf8af990e82d3a": "300bd0d1facaf6819227a44408398546",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0a/a65af33aa420a69e9b465cf61aa89fae6d1d07": "00f9ed52651ef61c07ae0b4ef0c740e1",
".git/objects/0a/f1ac611c6d1c4b74e18361db0a84b74c6707ca": "c7ca5fd3043b45ff331c6edf4c4d3f0c",
".git/objects/0b/9b505d27c4b1665da708e5db772c2efbc83f40": "a193332729387368862df6e047b87a7b",
".git/objects/0f/351c356ad7e06b96c61b2c8eb83f73209481c9": "c8a0d6f2d1e416f0431e794db7ec0b36",
".git/objects/11/0a52c0c80f30b8c6410ef50b92ed2c6001582e": "f9cb8c727a57a58c0260d20ad59cb8f0",
".git/objects/12/91f74e5caf6d473c990858077b9637f1768dcc": "955c0c29796179e8ea32018b8e62ea9c",
".git/objects/15/06bdd632a6bc74fd4bae3f315ae59365185c2c": "3984f3967c02fa0315798240b1b457fa",
".git/objects/16/00afbfa1270c227c715c610b14e8afb15f0eab": "4f6a75c9470ad721fe4c38672816ff9b",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/17/1628065afc7001ab40f604fd58711866692a83": "902f3b04dd46bb2066c7482b88573f29",
".git/objects/19/277330fa65f65031cd460462ff805203e37802": "3b302b2131cd1ab38c7c5313da7aab7b",
".git/objects/1b/f662e80d9b344de1921cacf5594e7cb186dd81": "edebae00a794b670c5e02ad63abb8e92",
".git/objects/1d/1b1afabfd06aac32a3d79e3121120b76553922": "9a0ccd2089d9640f7d2187e845c20bdc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/d33c327937fe4c6d5e4624491923c8800c3164": "2373467140a062fb162e3a431b7d223c",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/28/be2c1ac2a5fc80aec3d51a02ae8e846d82cbba": "71e164a9274ae21fae0a728ccd73fae0",
".git/objects/29/29f0e475860ab5d735df94286d3fd00f37b2ed": "f70e4c2e6bb353fb05bc9b35d8aef701",
".git/objects/2c/12ed1fb10b75f5ef6142e41eacf4699d41e82a": "af11b337fee49b31f23dc2a0f466b84a",
".git/objects/2d/17b0743cfe0c735c5c1f28b03823d0ae7a0ad9": "9502b63fa621b865948b0f10b5292096",
".git/objects/2d/5520c8cca83ec2fcf23d188764165c4794a203": "a07d018474aa18832aff948e420360de",
".git/objects/2f/c8b4c4ea4b23d938d7680b320ced4fb32bed7e": "1a63260cc057aa227e0a5bb1e409f6ef",
".git/objects/31/e7714156b51efb153d0881ab4d1e32605529e9": "09ca97c5a922f5626b66f29267270ead",
".git/objects/32/86f64447c1f1986f67fee2145de3189108a36b": "eb5e1b8f9ecc8dc00fa042a5383c04f2",
".git/objects/37/f2e8baa5a462ba947434534a7ea5e9664a9cce": "c82d79e3e8b857eace66918a4824711d",
".git/objects/39/b39f86530cedf46e30efed4ae6d1b06d434040": "f2572f030095f84e82883dae11935eb1",
".git/objects/3a/8dc8b3665911b98e1d6b672a816df6c8ceb053": "b2bb395732b41a12f6b52b11cad4b9c3",
".git/objects/3b/4d97dadf2dbf77bef72299d1620ba390f8199a": "58a28509a8a9c1d08d61ea32534e9608",
".git/objects/41/124219408d8cf2ec48556edf2f17dae4d778c7": "af50a6a02d50c31cd0155f78857d6288",
".git/objects/46/1b03043bc686efe77a9146c0de660a2fb95bbf": "c2492f5a881f73daacda1b8c95d55f02",
".git/objects/48/5acb9e4927bb50d7d1abbccfc9a4bb40284564": "f48ab4334d88babafb98c0aabea6a89a",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4b/9635517114a1ebf2176d229dd93379aeb51ed7": "ab3b7700464ad7397f9eed1657785a93",
".git/objects/4c/6d3f745ae75554d39a4964d2d90ff3cabc7b33": "79052f26c66bf8c1a877962b9e32863b",
".git/objects/4d/bbb974003cc5aa260893f9e8ec6ee87052ba18": "efc1383e210323f964fcc08837f13abe",
".git/objects/52/184be2597afa6474e89d58e6e90671dd455e0f": "2d1d4a0aaeed32f5ce1ec0ab296f0d27",
".git/objects/53/58941bbe51f141c8fb20a8f0d2dc0e14075f2e": "aadb5ecab10d0dcc4edcf633a0790024",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5a/f1154a78e2202dc5c80eeada2c52e7aca87326": "83392e726f448b5f6615b9e19172d37b",
".git/objects/5e/4fe23aae5eef5e54bdb80c041cc9e380093b5a": "73a67d4811ed5b07445459421b5fe3cc",
".git/objects/62/2f0897f079ede0bc3c65847353f851b7550369": "0a1b42597d9c040fd685d93e9fda0509",
".git/objects/62/b9c8dc43c913bf3ea62a0d8acca12b0be8aea8": "49c28cc623702b428b53b1ea2d1c47a6",
".git/objects/64/8177fbc04d90d8717c22692e944576b6dcfcfa": "d0d1ae56fa3a8c8d051be4f3b086bec5",
".git/objects/66/aff07b3b807ea4da2a510e93c1eae5ac356f54": "2704aea2ea50c2ee81db3370889b1701",
".git/objects/68/4ebd569fbeb890b1d8d3ce73cfdf3bb4d78022": "5426d825b86be5392670df2e71e30aa0",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/6c/3f80100b4dd35eb251362348a04fd4bd45df61": "d56fc095479644f0c6165e497a9838b7",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/72/7c3cb721dd33abd674a8f166628de3f7617646": "f9e1694120b51f1cd6c02d79fc667ab7",
".git/objects/73/d9d330ec64d5aa395a0560d1f0d45c45244ddd": "0dc790cbee332f75c53c8b86e688dea0",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/79/7c4a570ab4ec5b077a670bdcd53cfd5d680da6": "4aabf5af34d66e463f7a962f2d293037",
".git/objects/7c/f910037cf801c3c5abee1aaf8ca114e9b57194": "faa3d80e5f232ecbb8b89b2eece6d591",
".git/objects/7f/5bbced0aa3ac14133bc47e892aca25a0016025": "0bb1c821bb97867f9c2dc1e1dcdf9648",
".git/objects/80/f97f2d888645b9f4e86dab13ba604ddca4d2c3": "2dfefacef6ba56e5503d73da01c3dee6",
".git/objects/81/41dfdbab": "bf38ee46d68d8ae6316b28221364b8ef",
".git/objects/81/527340fe58d8495b5dfd45aaf0f1f7823602c8": "bf38ee46d68d8ae6316b28221364b8ef",
".git/objects/81/5cc6a498": "bf38ee46d68d8ae6316b28221364b8ef",
".git/objects/81/992dc33e": "bf38ee46d68d8ae6316b28221364b8ef",
".git/objects/81/b17d22b2": "bf38ee46d68d8ae6316b28221364b8ef",
".git/objects/81/cf097603": "bf38ee46d68d8ae6316b28221364b8ef",
".git/objects/82/1183a5bcff4f911573fc246ce784f5ae8f355c": "fc131b8e02dd39e087a2efe53813a93d",
".git/objects/83/8d3f36397c1e0b44f007df661459323423118c": "462b16deb0435715c60d936de1837996",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/4568225d": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/4fbe0b97": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/9a51dc0a": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/a628d5d6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/4761e957": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/4b15e433": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/f07f930bb3a15a589e2879abb5b8da8afeffc9": "c2121c10aef33c1b6afeff35a3565a1b",
".git/objects/94/90ffc6d2e158b266f719d58365905c1c5060cb": "98801650050f9fa10870b4e56c89676a",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/45a89d8968ec05cc6eeca3d4cd298af022f76d": "90c23c3ebf2475333baa899e49e7f4e4",
".git/objects/95/9bda22a3d3d3a83fa9df60db81e4fdadf16fb2": "955708354d9f29cba387936cdce6761a",
".git/objects/97/b6eee463de5e4fcf79c6570e4173f50eca81d5": "b58977ec52e0607f13c5710fd432ef21",
".git/objects/99/9d63cdc1741b299cd6d3b0cac76fb84e9dd332": "37cfc41ddcd94801467bf69fd9b493db",
".git/objects/9a/844396d2efdde0b8d3956748713dbb167a620d": "c3da7a143344d3bf3b2f425eb270812f",
".git/objects/9b/139396278263d155c8ab21419e166aa6097791": "37a095fce5323b297393c2d124715903",
".git/objects/9c/4877e201a7dc90a40e3ec7f3afcdfd2ae2b317": "348747b09d53fc828bbcfacf1359d4db",
".git/objects/9d/d2941da4761ec99daaf82db1656980b4e35416": "07fd1e505ab8309a2e92f0b524220a49",
".git/objects/9e/70a12fa09618324244bbe89ef7e6054cb2c2b8": "055b4e4589b1f9050b71e92378fee1bb",
".git/objects/9f/e58927d4647e941781602bf886f494adaa9a61": "d958f35db07cda3275454b6282a2d02b",
".git/objects/a0/4a4b74b97bc74bc8301d3389f8da0573f076c9": "c0dda3a0af70d7492899f9f2ec3e8f7a",
".git/objects/a2/c33c669ccf38db6dffd9352f0892ac78aadc83": "41bd8c19e7758099fe20da2e04cc0981",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b2/d5418cb6c01215d6c68f709715407d8f39633e": "1b3d9a5e60960752a54273ec9661ebf6",
".git/objects/b4/7055df364ec1fa562ce4113ea07a3ae628d659": "8aef142f91e9a15062472787eafd8943",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/7831a8a2df165079516f4053c8de9f5caa5261": "c262799929ea7890af8d7616275e6938",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/7a298068ff5c98a553adf496cd6593b07b447c": "b1685d7f4094d230afefe997b788b499",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/c4/0a662b6828f700d246cb6bbf4e681a7ef7ed99": "96915f396c9a84e39d0a02d13e206219",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c9/5d5cef016d60323f252688adc071294a1b664b": "fb30c51db2f37257c061bf22658eac88",
".git/objects/ca/7467a91fbb8c6ec86869007be325b728a72066": "0d33fb1a812ad48eb2f2f39529abfa9c",
".git/objects/cd/b3d324172e801b47b84b36fa5ff90f17f05f9d": "28d87ad2d1bc5100ee85e6104add860b",
".git/objects/cd/dcee43afd50cf1b85b5f1f579b8b6446d6e76c": "e9be9899cd9c6a72dc36e153f79e2298",
".git/objects/cf/69b6168cf33dbbda99e1214145e64cf712244c": "7490530ff32c363ed4dce2b96a74ad14",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/e091a602ba12eecc87b4bddadfaa3cadd1f3d4": "eef29d38b2f96c1459c0895fd0fdf374",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/28cfea73a5ae7d6503e62eace4292cb253f247": "9357624ae701ec722dc8106e66caa8e6",
".git/objects/e7/1ff83cf5d0029cb53324b893667fb9d3718eaa": "a7779a3fa3392779cdcfddd698f04c35",
".git/objects/e7/98dd9195d2121e21242cf8816967dfa6bbece5": "8f69c5c07296efab26ecb2aa8753d43f",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/a1a7dd698e23488df7fbb7eded84ad5df53ea5": "ba3d26f46260c837bb73693cdfecad7f",
".git/objects/ec/74bb9ced72a3711dbffad826063e824cfde657": "9de61ebaf305e3d0e417a25f06a9d6d4",
".git/objects/ee/6eb54bb2e9d3659de5380fbd90111424f8fc71": "b577e30b2bef4fea9c90984f329c98bb",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f7/389bb80605d6e3ac952880c425176978627420": "410a694da56d62a2aa2c8641a51c492a",
".git/objects/f8/344880a1a8e716cec5f5974e1fde40889c0649": "3204868069b7f62bb4c6b95e16d9d722",
".git/objects/fa/5902dbb5f40e84f14bcc615915d3d10a54b399": "ec9a97ba3548f6b0d0323beea148b185",
".git/objects/fb/3c6d07e75afa1d8841a7151c5cc05a98a72579": "a9c8a16edb8891eb5a4d75e7a58bb0fc",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/b3c08f88dfaf7489a745f05c895574418b4684": "a951816d361740223c0277e03c67c25f",
".git/objects/ff/a11a3e5f74cfa9400545c15d6b84e4b8bd05b1": "be133fbfcba96452cf3800745a10dcb9",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "50783c6866c1c3a086cca662c00f0292",
".git/refs/remotes/origin/main": "50783c6866c1c3a086cca662c00f0292",
"assets/AssetManifest.bin": "2e1b8d240e0a2b0be118cf430e996364",
"assets/AssetManifest.bin.json": "3ac9cbaa6b287ad32b555d6f78962190",
"assets/AssetManifest.json": "3a358e6e6ed785e018bd1aea68be93ce",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/pdf/resume.pdf": "c54c6b1a514fcdfb77ce9afc00395306",
"assets/assets/pdf/SUMIT_RESUME.pdf": "4ac0b33cc19f70007c466294d207ebad",
"assets/assets/photos/Photo1.jpg": "e2f6636b7303d3f690682f8bb47b70e2",
"assets/assets/photos/Photo2.jpg": "e2f6636b7303d3f690682f8bb47b70e2",
"assets/assets/photos/transparent-background.png": "f60a17dea1fbee496b196337617867ae",
"assets/assets/photos/white-background.png": "6de880ec7c785e99364585d531c3df6b",
"assets/assets/photos/white-shirt-transparent.png": "2a9d3a1c0ad82f4391453e96b35d5b5f",
"assets/assets/photos/white-shirt.jpeg": "54b40351fad3005408a8ea4581d02918",
"assets/assets/project/chat.png": "c9a1308d2d106ba3b2aa42f17a957c3f",
"assets/assets/project/food.png": "e75bf1d2dc18f0a91f83b909f0ad643c",
"assets/assets/project/news.png": "db6f443f3fd309b546167e174fb50d50",
"assets/assets/project/wallpaper.png": "15f95fb8a2c628cb8dafd789427c541a",
"assets/assets/social/github-icon.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/social/gm.png": "8ab319f9529165b89877bbe166f7a649",
"assets/assets/social/gmail-icon.png": "8ab319f9529165b89877bbe166f7a649",
"assets/assets/social/in.png": "9dcfd0b5f755e36117efb27af1ff78a0",
"assets/assets/social/linkedIn-icon.jpg": "a9a1c675afbbf44c9ad330debc9dacfd",
"assets/FontManifest.json": "700c3e81c9e6ab6c69ed6170123cbad7",
"assets/fonts/MaterialIcons-Regular.otf": "7107951b5932f899dac79dc54257022f",
"assets/fonts/Montserrat-VariableFont_wght.ttf": "e6cb49ef6502d09136c7302d56f4197b",
"assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/fonts/Sevillana-Regular.ttf": "b43d6a97dd48cc65ae2a27f400734fed",
"assets/NOTICES": "6adb213d51c5aef168e3a55404ea4a29",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "dfe806cc772aa9db7042cdc46ffebaeb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "569ac701a9a2549c2a1db917ff1eabce",
"/": "569ac701a9a2549c2a1db917ff1eabce",
"main.dart.js": "22842b655dcafe1eb3a83645239b0080",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
