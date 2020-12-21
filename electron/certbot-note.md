最近需要為個人使用的 Http 網站加上 SSL 憑證 , 
在 Windows 平台中常看到的是用 openSSL 去產生一個 SSL 憑證 ,
目前看到 openSSL 可以產生 自簽憑證 (Self-Signed Certificate), 但是此方法產生的 SSL 憑證會被瀏覽器認定為 "不可信任的來源"

![](https://i.imgur.com/ZjDNokq.png)

這方法走不通 , 讓我們換另一個方法來走 , 在 Linux 中使用 certbot 產生可信任的 SSL 憑證 , 常常可以看到文章在分享這個做法 ,

Q. 那在 windows 中 , 我們可以使用 certbot 來產生 SSL 憑證嗎 ?

A. 可以 😇

以下讓我們詳細說明一下 certbot 在 windows 上的一些可用的指令

## 前置作業

### 1.找到 `一台對外有 Public IP 的 Windows 電腦`

當你在練習時 , 你可以使用 AWS . Azure ...等雲端平台 , 建立這個東西 , 在下不太建議 , 你真的拿一台實體的 Windows 電腦直接對外連線 , 這樣做你很容易中木馬病毒 , 然後引發 [產線中毒大當機](https://www.ithome.com.tw/news/125118)

### 2.下載 certbot 提供的 [Windows 安裝檔](https://dl.eff.org/certbot-beta-installer-win32.exe) 並將其安裝

### 3.準備 DNS 將其指向到你準備的 Public IP 

## 指令解說

當你在 cmd 中輸入 `certbot -h` , certbot 會將詳細的資訊描述出來 

```shell
certbot [SUBCOMMAND] [options] [-d DOMAIN] [-d DOMAIN] ...
```

### 各種常用操作

- 建立 SSL 憑證 , 有各種類型的建立方式

certbot certonly --webroot -w C:\Users\andrew\Desktop\http-server -d azure.test.andrewdeveloper.com -n

- 刪除 SSL 憑證

certbot delete --cert-path C:\Certbot\live\azure.test.andrewdeveloper.com\privkey.pem -n
certbot delete --cert-name azure.test.andrewdeveloper.com -n  

- 註銷 SSL 憑證

certbot revoke --cert-path /etc/letsencrypt/live/CERTNAME/cert.pem  

- 更新 SSL 憑證

??? 自動更新 ??? 目前在 windows 上 , 在下還沒有找到如何讓 certbot 自動更新 SSL 憑證

### 向 GUI 進發

certbot 參數中有一個 -n ( Run non-interactively ) 非互動模式 , 專門用來給其他程式呼叫使用 , 

也許之後可以用 ElectronJS 設計一個 GUI , 來操作 certbot ? 

## 參考資料

- [certbot on windows](https://certbot.eff.org/lets-encrypt/windows-nginx)

---

// 建立 certbot 憑證
certbot certonly --webroot -w C:\Users\andrew\Desktop\http-server -d azure.test.andrewdeveloper.com -n 

// 註銷憑證
certbot revoke --cert-path /etc/letsencrypt/live/CERTNAME/cert.pem

// 刪除憑證
certbot delete --cert-path C:\Certbot\live\azure.test.andrewdeveloper.com\privkey.pem -n
certbot delete --cert-name azure.test.andrewdeveloper.com -n

// -n 參數 = Run non-interactively

--------------------------------

certbot [SUBCOMMAND] [options] [-d DOMAIN] [-d DOMAIN] ...

Certbot can obtain and install HTTPS/TLS/SSL certificates.  By default,
it will attempt to use a webserver both for obtaining and installing the
certificate. The most common SUBCOMMANDS and flags are:

obtain, install, and renew certificates:
(default) run   Obtain & install a certificate in your current webserver
certonly        Obtain or renew a certificate, but do not install it
renew           Renew all previously obtained certificates that are near
expiry
enhance         Add security enhancements to your existing configuration
-d DOMAINS       Comma-separated list of domains to obtain a certificate for

(the certbot apache plugin is not installed)
--standalone      Run a standalone webserver for authentication
(the certbot nginx plugin is not installed)
--webroot         Place files in a server's webroot folder for authentication
--manual          Obtain certificates interactively, or using shell script
hooks

-n               Run non-interactively
--test-cert       Obtain a test certificate from a staging server
--dry-run         Test "renew" or "certonly" without saving any certificates
to disk

manage certificates:
certificates    Display information about certificates you have from Certbot
revoke          Revoke a certificate (supply --cert-name or --cert-path)
delete          Delete a certificate (supply --cert-name)

manage your account:
register        Create an ACME account
unregister      Deactivate an ACME account
update_account  Update an ACME account
--agree-tos       Agree to the ACME server's Subscriber Agreement
-m EMAIL         Email address for important account notifications

More detailed help:

-h, --help [TOPIC]    print this message, or detailed help on a topic;
the available TOPICS are:

all, automation, commands, paths, security, testing, or any of the
subcommands or plugins (certonly, renew, install, register, nginx,
apache, standalone, webroot, etc.)
-h all                print a detailed help page including all topics
--version             print the version number
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
