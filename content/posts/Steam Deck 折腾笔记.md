---
date: 2025-09-11
---
新学期搬到了新校区，这边环境清净舒适，但每次有事回本部都要坐40分钟的班车。为了打发这段通勤时间，我便购入了一台 Steam Deck OLED。带着它坐了几次班车后，确实极大地缓解了路上的无聊，也顺便解决了平时没什么动力清理游戏库存的问题。

我这台是在转转上买的二手，成色99新，到手之后发现和全新几乎没区别，却便宜了一千块钱。其实像游戏机，尤其是Steam Deck这种功能高度特化的掌机，很多人一时兴起买来却最终闲置，所以买二手的性价比真的很高。

既然拿到了Steam Deck，肯定是要上手折腾一下的。毕竟 Steam Deck 说白了就是台掌上PC，只是做了很多针对游戏场景的优化。V社也是鼓励玩家去多折腾，提供了很多便利的功能，也放出了不少方便折腾的资源。既然如此，那我就恭敬不如从命，稍微折腾一下了。

不过我本人不是什么资深的极客，也不是重度游戏玩家，折腾的东西也只是一些无伤大雅的小打小闹，但无论如何，好玩就够了。

![](https://pic4.zhimg.com/v2-06669598bca20ea4204664bd850598e3_1440w.jpg)

*也是终于能玩上魔裁了*

## Steam Deck 还是 Switch2？

在开始之前，先谈一个问题：作为人生中第一台掌机，应该选择Steam Deck，还是Switch 2？

其实，如果单论硬件性能，Steam Deck会比Switch 2强一些——但掌机不能只看性能。一台掌机最重要的还是其游戏生态，Steam Deck和Switch分别背靠Steam游戏库和任天堂第一方阵营，这两者本就不是同一赛道的产品。

与Steam Deck构成直接竞争的，其实是华硕ROG、微星等厂商推出的PC掌机。从这个角度看，Steam Deck无疑在性价比和原生体验上做得非常好。而Switch 2在任天堂的赛道上，唯一的对手就是前代的Switch。如果想玩任天堂的独占游戏，Switch几乎是唯一的选择；而我对任天堂的游戏兴趣不大，所以最终选择了Steam Deck作为我的第一台掌机。

## Decky Loader 和 ToMoon

既然 Steam Deck 背靠 Steam，那么首先要解决的就是网络问题。

众所周知，Steam 商店在国内需要一些特殊手段才能顺畅连接。在电脑上，我们可以直接安装加速器，但 Steam Deck 应该怎么办呢？

一个办法是更换具备加速功能的路由器，但我不想额外添置设备，更倾向于寻找能直接在 Steam Deck 本身运行的解决方案。

方法是有的。Steam Deck 搭载的 SteamOS 是一个开放的系统，允许我们安装一款名为 Decky Loader 的第三方插件加载器。有了 Decky Loader，就能进一步安装专为 Steam Deck 设计的网络加速插件 ToMoon，从而解决网络问题。

按照 ToMoon仓库中的指示，安装 Decky Loader之前，需要先打开开发者模式和CEF调试：

![](https://pic4.zhimg.com/v2-6aae0b977f4461d60f483f052a6f1cef_1440w.jpg)

![](https://pic1.zhimg.com/v2-46be92e47060af318e7ea82174e7e0ae_1440w.jpg)

然后长按电源键切换到桌面模式，在终端中使用`passwd`设置密码，然后使用命令安装Decky Loader和ToMoon。在桌面模式下，触控板移动鼠标，右扳机是鼠标左键，左扳机是鼠标右键，按 Steam+X 呼出虚拟键盘。

![](https://pic2.zhimg.com/v2-e2194b2eb1bd58f3bc07a97ba590afe1_1440w.jpg)

![](https://pic2.zhimg.com/v2-13ab73fe12ad95751992b44560efdda1_1440w.jpg)

安装完成后，回到游戏模式，菜单里就多出来了插件页面。打开 ToMoon 插件，输入订阅地址，就可以正常地使用 Steam 的网络了。

![](https://pic1.zhimg.com/v2-09a9b6b81cbe400d0dd5c5123ce81558_1440w.jpg)

  

![](https://pic3.zhimg.com/v2-3a61aa2c49b9ff438e24e858ddff5810_1440w.jpg)

## 安装Decky插件

既然已经有了插件加载器，只装一个ToMoon怎么够呢，当然是要打开插件商店大装特装啦。下面分享一下我觉得还挺实用的几个插件。

### SteamGridDB

这个插件的功能是自定义Steam库中游戏的封面，也可以为非 Steam 游戏添加封面。有了这个插件之后，非Steam游戏也可以有好看的封面了。

![](https://pic2.zhimg.com/v2-d59bca9233f86f71680c0e0922fd4671_1440w.jpg)

### PlayTime

游戏时间统计。

和Steam自带的统计不同，这个插件可以统计非Steam游戏的时间。

![](https://picx.zhimg.com/v2-c650e298ba2795a1791ddacc9c9e8e2f_1440w.jpg)

### PowerTools

可以修改CPU电源策略、GPU电源策略，以及电池充电策略。

比如设置90%的充电限制来保护电池，毕竟掌机的电池续航还是很金贵的。

![](https://pic4.zhimg.com/v2-411147cedd878656a057f25fd594462b_1440w.jpg)

### Decky-Framegen

在Steam Deck上支持DLSS。其原理是利用FSR 3来模拟DLSS，并欺骗游戏，让游戏误以为硬件支持DLSS，从而开启该选项。

![](https://pica.zhimg.com/v2-73d2d5b3615fb6a6cfe233db21b08b5a_1440w.jpg)

### HLTB for Deck

这个插件用于接入 How Long To Beat 数据库，在游戏库页面显示各项作品的预估通关时长。

不过，该插件的状况有些复杂，直接从商店下载的官方版本已无法使用。经过一番查找，我找到了一个仍在维护的Fork版本，但发现它尚未合并一个支持中文游戏名的重要PR。

于是，我便Fork了最新的代码库，在手动合并该PR后，重新编译生成了一个可用的版本。我已将这个修复版发在了 [GitHub](https://github.com/Wybxc/hltb-for-deck/releases/tag/2.0.5) 上。

![](https://pic3.zhimg.com/v2-44e5477e539f5bb2d434dcc99601111a_1440w.jpg)

### Storage Cleaner

清理着色器缓存和游戏数据。

![](https://pic2.zhimg.com/v2-40fca351144036e6162ef44cd52723f1_1440w.jpg)

### Pause Games

这个插件会在设备休眠前或弹出窗口时自动暂停游戏，从而解决部分游戏从休眠中恢复后声音撕裂的问题。

![](https://pic3.zhimg.com/v2-ff27a2a642af62a134bf625db442594c_1440w.jpg)

### ScreenshotUploader

把截图自动上传到Steam。顺带一提，在Steam Deck 游戏模式下截图的快捷键是按 Steam + 右肩键，有一种按相机快门的感觉。

![](https://pic1.zhimg.com/v2-34b85ce2ae92f480d8a2064446850e80_1440w.jpg)

### Decky Terminal

在游戏模式下访问终端。虽然这个插件有一些体验上做得不够细致的地方（比如方向键会有问题），但终归是够用了。

![](https://pic1.zhimg.com/v2-72860021ef07a4dd223be0035232193c_1440w.jpg)

### MangoPeel

自定义Steam Deck的性能叠加层。

Steam Deck自带的性能叠加层信息已经很丰富，但唯独缺少了当前时间。使用MangoPeel可以自定义叠加层显示的信息，例如像我这样，将当前时间和FSR信息调出来，代替原生的内存/显存占用信息。

在安装这个插件之前，需要先手动安装MangoHud。按照MangoHud官方仓库的指引，使用Flatpak进行安装（不要用pacman，因为SteamOS的系统分区是只读的）。

![](https://picx.zhimg.com/v2-ca980e0677af5135bb58b6a97b5f2a83_1440w.jpg)

因为内置截图不能捕捉性能叠加层，所以这张是拍屏

## 运行 Minecraft

Steam游戏要玩，非Steam游戏也要玩，这才称得上健全。那么，就先来试试大名鼎鼎的Minecraft。

作为一款跨平台适配极佳的游戏，在SteamOS上运行Minecraft当然不在话下。我这里用了点比较偷懒的方法：直接在桌面模式的Discover应用商店里下载Prism Launcher。

![](https://picx.zhimg.com/v2-0cedfbf3270e500be7b8eb49f666b789_1440w.jpg)

下载完成后，在开始菜单中找到Prism Launcher，右键「添加到Steam」，便可在游戏模式的库中找到它。之后，将其名称修改为「Minecraft」，再用插件设置好封面图，它看起来就和原生Steam游戏别无二致了，甚至连HLTB插件都能识别出它的通关时长。

初次启动前，需要在桌面模式下打开，完成一些账号登录之类的设置。这些设置完之后，就可以在游戏模式里直接打开了。

![](https://pic3.zhimg.com/v2-4ae765c57ff153bf5801f9b95589c6ce_1440w.jpg)

随便添加一个1.21.1 + NeoForge，装上Sodium和Iris看看实力。

![](https://pic1.zhimg.com/v2-55b110ff463e0729d94699e3a0851f2a_1440w.jpg)

启动游戏，看到了熟悉的界面：

![](https://picx.zhimg.com/v2-044a6c9cc7b64c81e97d8af247411c69_1440w.jpg)

按左侧的Steam键，可以调整游戏的手柄映射。我这里选了一个社区提供的映射方案，用起来手感还挺丝滑的。

不过，这也暴露了一个问题：掌机手柄上的按键实在是太少了。即便Steam Deck已经提供了额外的触摸板和双背键，也仅仅是刚好满足Minecraft原版的按键需求。如果要玩那些需要大量自定义按键的模组，就有些力不从心了。

![](https://pic4.zhimg.com/v2-36ce1beb7fd25ea13e2537f60cc624b1_1440w.jpg)

这张也是拍屏，因为覆盖界面不能截屏

原版游戏60帧可以跑满（我开了屏幕60Hz刷新率限制），但分辨率不是很高，即使打开FSR还是会有一些锯齿。

![](https://picx.zhimg.com/v2-3f519b0add5078ba8f8663aaabdced65_1440w.jpg)

原版的强度还是太低了，得打开光影试一试。我用的是Complementary Unbound光影包，配置设为Medium，为了掩盖低分辨率的锯齿，额外开启了FXAA和Depth of Field效果。

在这种设置下，游戏可以稳定跑满60帧，甚至能达到90帧。但如果将配置调至High，就跑不满60帧了。（作为对比，我在MacBook上通常只能开Very Low配置来玩。）

这就不得不提Steam Deck独特的硬件配置了。与主流的PC配置思路不同，Steam Deck作为一台掌机，其GPU性能远强于CPU。这就导致了一个有趣的现象：有时游戏即便在低画质下也无法达到很高的帧率，而此时再调高画质，帧率却几乎没有变化；这正是因为CPU达到了性能瓶颈。实际上，在这种情况下，只需将屏幕刷新率限制到与游戏实际能达到的帧率相匹配的水平，依然能获得相当流畅的游戏体验。

![](https://pic3.zhimg.com/v2-ffd96b7ad1c36ed7fcbd436dfad305d2_1440w.jpg)

截图有点糊，但实际上有FSR和FXAA的加持，在屏幕上看起来还挺清晰的

## 安装 Windows

虽然Steam Deck默认搭载的SteamOS是Linux系统，但它同样支持安装Windows，V社官方甚至还为此发布了[驱动程序](https://help.steampowered.com/en/faqs/view/6121-eccd-d643-baa8)。

我没有选择在内置硬盘上安装双系统，毕竟我不会将Windows作为主力系统，日常主要还是使用SteamOS。因此，我选择了在外置TF卡上安装Windows To Go的方案。

我选用的是金士顿SDCG4 256GB TF卡，因为这张卡拥有较为出色的随机读写性能，很适合用作系统盘。

整体而言，Windows To Go方案比传统的双系统更简单便捷。只需将烧录好的启动盘插入设备，从外部存储器引导，再遵循常规流程完成Windows安装即可。这样做的好处是完全无需改动内置硬盘的分区，因此不必担心丢失原有数据。

如果在Windows PC上操作，流程确实如此。但我的情况有所不同，因为我只有一台MacBook。在MacBook上制作Windows To Go启动盘，过程就要曲折一些。

首先，macOS系统定是没法直接做Windows启动盘的，必须借助Parallels Desktop虚拟机内的Windows环境来完成，而所用的工具自然是经典的Rufus。

制作启动盘需要一个基础镜像，我选用的是Windows 11专业中文版，并用tiny11builder精简掉了一些非必要组件，最终生成的ISO镜像大小约为5.5GB。

![](https://pic1.zhimg.com/v2-d6b055e85bb97381204c48caf0474b2c_1440w.jpg)

然后就遇到一个棘手的问题：MacBook自带的读卡器无法被Windows虚拟机识别；而TF卡附赠的读卡器虽然能被识别，在烧录时却会报错。

该怎么办呢？

这个时候就只能曲线救国了：先找一个U盘，将Windows To Go系统完整烧录进去；然后返回macOS系统，用balenaEtcher的「克隆磁盘」功能，将U盘的数据完全复制到TF卡上。

![](https://pic1.zhimg.com/v2-099f15f02239086ad70ddd4e3aa59a18_1440w.jpg)

不过这还没完，由于我使用的U盘容量比TF卡小，克隆后的分区并未占满TF卡的全部空间。因此，还需要回到Windows虚拟机，用分区工具对TF卡进行扩容，以利用全部剩余空间。

然后，下载驱动程序，解压后存入TF卡。注意这一步最好在Windows而非macOS环境下操作，否则，macOS的Finder产生的垃圾可能会导致显卡驱动无法识别。

接下来，将TF卡插入Steam Deck，在关机状态下，按住「音量减」和「电源」键进入启动菜单。选择从TF卡启动，即可开始Windows的安装流程。

安装的过程我没有留截图，这里略过。总之，一通安装之后，就能在Steam Deck上看到熟悉的Windows桌面了。

![](https://pic3.zhimg.com/v2-b4d42a1a4b0fa5ecdabe2d297772bffa_1440w.jpg)

最后还有一个小问题：安装Windows后，它会自动将自己设为默认启动项，但我日常主要还是想使用SteamOS，并不想每次开机都要进启动菜单手动选择。

要解决这个问题，可以在SteamOS中安装一个名为`Force-SteamOS-On-Boot`的脚本，其作用就是让SteamOS也有将自身设定为默认启动项的功能。安装该脚本后，虽然每次切换系统仍需在开机时手动选择，但设备会记住上一次的选择。也就是说，正常重启会默认进入上一次使用的系统，这样就方便多了。

## 原神，启动！

既然已经安装了Windows系统，自然是要玩原神了——但是等一下，我并不想在Windows里玩原神，我更倾向于在原生的SteamOS上运行它。毕竟作为官方系统，SteamOS在功耗控制和性能调度上比Windows更具优势。

在Steam Deck发售初期，原神在SteamOS上运行还有转译效率问题，帧率表现反而不如Windows。那么在2025年的今天，情况又是如何呢？

当然，由于需要通过Proton兼容层，在SteamOS上安装原神的步骤依然略显复杂。不过，还好我有在MacBook上折腾CrossOver的精神疾病史，配置Proton的过程还算是轻车熟路。

安装过程需要在桌面模式下进行。首先，从游戏官网下载安装包，将其添加到Steam库。这一步会自动创建一个独立的Wine Bottle，后续的游戏安装与运行都是在这个Bottle里进行的。

![](https://pic1.zhimg.com/v2-166bdcc7cf7985fe3da63896e360e784_1440w.jpg)

运行之前，需要在兼容性选项里设置使用Proton Experimental。

![](https://pica.zhimg.com/v2-a6acfed133cdf9ebc204ca703eb5f1fa_1440w.jpg)

接下来点击开始游戏，进入安装界面，直接选择快速安装。因为Bottle的文件系统是隔离的，所以不改安装路径也可以。

![](https://pic2.zhimg.com/v2-4f986cc51aeaef800f08e42bad83dadd_1440w.jpg)

安装完成后，先不要直接启动。需要先在 `~/.local/share/Steam/steamapps/compatdata/XXXXX/pfx/drive_c` 这个路径里找到刚刚装好的启动器。中间那个 `XXXXX` 是一串数字ID，可以根据文件修改时间找到最新的。

找到 `launcher.exe` 之后，把它的完整路径复制下来。

![](https://pica.zhimg.com/v2-2591f3188b5ebdd95c0d7df0d962fac4_1440w.jpg)

然后，回到刚才添加到 Steam 里的安装程序，把复制的路径填进去：「目标」粘贴完整的路径（包含 launcher.exe）；「起始位置」填所在的文件夹路径（把路径最后的 launcher.exe 去掉）。

路径设置好之后，顺便修改一下游戏名称。

![](https://pic3.zhimg.com/v2-e1ac157906c81a8ac69a8e2a28f0edda_1440w.jpg)

再次启动游戏，就能直接打开启动器了。

现在的原神居然已经达到了100多G……慢慢下载吧。

![](https://pica.zhimg.com/v2-74bfdee0294b3f82df05a2b2ef3837ca_1440w.jpg)

等了将近两个小时，终于下载完了。

原神，启动！

![](https://pic3.zhimg.com/v2-0d8b5c700112fa638de1e9100b871306_1440w.jpg)

进入游戏后，发现语言是英文，并且不支持手柄。需要先将 Steam 的手柄映射调整为桌面模式，这样就可以按菜单键（映射为ESC）进入游戏设置，然后再把手柄映射改回手柄模式，这样Steam Deck的手柄就可以被识别了。

![](https://pic3.zhimg.com/v2-57ec487d7c63c48f5dbc352649ef3866_1440w.jpg)

看起来有点糊，我们来拉高一点画质。

720p 高画质，渲染精度1.2，打开FSR2。这种情况下居然还能跑到最高60帧！

但这个帧数并不稳定，场景复杂了就会掉到50多帧，应该是遇到CPU瓶颈了。所以我把帧数降到了45帧，配合屏幕刷新率也改到45Hz，这样子就能清晰流畅地玩了。

![](https://pic4.zhimg.com/v2-91b3221bd7ea184acdc4647fb5f52dd3_1440w.jpg)

嗯，很不错。

![](https://pic2.zhimg.com/v2-e8d63855c969e2b9aa6898ba93e3bce9_1440w.jpg)

Steam Deck的性能叠加层没有检测到FSR，但实际上是打开了的

但还有一些地方有点小问题。游戏里一部分文字会显示得很模糊，比如地图和NPC的名字。估计是转译导致的兼容性问题。

![](https://pic4.zhimg.com/v2-86323eb5fc32e56a322fb02595c0705f_1440w.jpg)

最后，芙芙终于回到了她忠实的枫丹庭。

![](https://picx.zhimg.com/v2-244a3da67fcb3bb8b73f43b79539546b_1440w.jpg)

她真好看

以上。