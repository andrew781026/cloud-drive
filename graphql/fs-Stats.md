列表說明 fs.Stats 與其相關資訊

```
Stats {
  dev: 2114,
  ino: 48064969,
  mode: 33188,
  nlink: 1,
  uid: 85,
  gid: 100,
  rdev: 0,
  size: 527,
  blksize: 4096,
  blocks: 8,
  atimeMs: 1318289051000.1,
  mtimeMs: 1318289051000.1,
  ctimeMs: 1318289051000.1,
  birthtimeMs: 1318289051000.1,
  atime: Mon, 10 Oct 2011 23:24:11 GMT,
  mtime: Mon, 10 Oct 2011 23:24:11 GMT,
  ctime: Mon, 10 Oct 2011 23:24:11 GMT,
  birthtime: Mon, 10 Oct 2011 23:24:11 GMT }
```

| 屬性 | 說明 |  資料格式 | 
| -------- | -------- | -------- | 
| dev     | 包含该文件的设备的数字标识符。  | bigint |
| ino     | 文件系统特定的文件索引节点编号。  | bigint |
| mode     | 描述文件类型和模式的位字段。  | bigint |
| nlink     | 文件存在的硬链接数。  | bigint |
| uid     | 拥有该文件（POSIX）的用户的数字型用户标识符。  | bigint |
| gid     | 拥有该文件（POSIX）的群组的数字型群组标识符。  | bigint |
| rdev     | 如果文件表示一个设备，则此值为数字型设备标识符。  | bigint |
| size     | 檔案大小 ( bytes ) | bigint |
| blksize     | 磁碟大小     | bigint |
| blocks     | 为此文件分配的块数。     | bigint |
| atimeMs     | 最後讀取時間 (Timestamp)   | bigint |
| mtimeMs     |  最後修改時間 (Timestamp)      | bigint |
| ctimeMs     | 最後更改狀態的時間 (Timestamp)      | bigint |
| birthtimeMs     | 建立時間 (Timestamp)      | bigint |
| atime     | 最後讀取時間 (Date)     |  Date |
| mtime     | 最後修改時間 (Date)     |  Date |
| ctime     | 最後更改狀態的時間 (Date)      | Date |
| birthtime     | 建立時間 (Date)    | Date |
