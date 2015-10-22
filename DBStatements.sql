CREATE TABLE `COMMENT_T` (
   `CNO`    INTEGER    NOT NULL COMMENT 'CNO', -- CNO
   `FNO`    INTEGER    NOT NULL COMMENT 'FNO', -- FNO
   `MNO`    INTEGER    NOT NULL COMMENT 'MNO', -- MNO
   `CRE_DT` DATETIME   NULL     COMMENT 'CRE_DT', -- CRE_DT
   `CONTNT` MEDIUMTEXT NOT NULL COMMENT 'CONTNT' -- CONTNT
)
COMMENT 'COMMENT_T';

-- COMMENT_T
ALTER TABLE `COMMENT_T`
   ADD CONSTRAINT `PK_COMMENT_T` -- COMMENT_T 기본키
      PRIMARY KEY (
         `CNO` -- CNO
      );

ALTER TABLE `COMMENT_T`
   MODIFY COLUMN `CNO` INTEGER NOT NULL AUTO_INCREMENT COMMENT 'CNO';



--
--* 친구&멤버 인서트문 
--insert into memb_t(nicknm, email, pwd, name, addr, lat, lon, sex, hobby, hometwn, intro)
--values('test01nickname', 'test01@test.com', '1234', 'test01name', '서울시 강남구 test1구', '37.497129', '127.027612', '1', '축구', '서울', '안녕하세요1');
--insert into memb_t(nicknm, email, pwd, name, addr, lat, lon, sex, hobby, hometwn, intro)
--values('test02nickname', 'test02@test.com', '1234', 'test02name', '서울시 강남구 test2구', '37.496708', '127.026865', '1', '축구', '서울', '안녕하세요2');
--insert into memb_t(nicknm, email, pwd, name, addr, lat, lon, sex, hobby, hometwn, intro)
--values('test03nickname', 'test03@test.com', '1234', 'test03name', '서울시 강남구 test3구', '37.498308', '127.026312', '1', '축구', '서울', '안녕하세요3');
--insert into memb_t(nicknm, email, pwd, name, addr, lat, lon, sex, hobby, hometwn, intro)
--values('test04nickname', 'test04@test.com', '1234', 'test04name', '서울시 강남구 test4구', '37.497380', '127.027294', '1', '야구', '부산', '안녕하세요4');
--insert into memb_t(nicknm, email, pwd, name, addr, lat, lon, sex, hobby, hometwn, intro)
--values('test05nickname', 'test05@test.com', '1234', 'test05name', '서울시 강남구 test5구', '37.501042348146726', '127.01761722564697', '2', '야구', '부산', '안녕하세요5');
--insert into memb_t(nicknm, email, pwd, name, addr, lat, lon, sex, hobby, hometwn, intro)
--values('test06nickname', 'test06@test.com', '1234', 'test06name', '서울시 강남구 test6구', '37.49908570947168', '127.02193021774292', '2', '축구', '서울', '안녕하세요6');
--insert into memb_t(nicknm, email, pwd, name, addr, lat, lon, sex, hobby, hometwn, intro)
--values('test07nickname', 'test07@test.com', '1234', 'test07name', '서울시 강남구 test7구', '37.49837070962823', '127.0185399055481', '2', '축구', '서울', '안녕하세요7');
--insert into memb_t(nicknm, email, pwd, name, addr, lat, lon, sex, hobby, hometwn, intro)
--values('test08nickname', 'test08@test.com', '1234', 'test08name', '서울시 강남구 test8구', '37.487917311280015', '127.02768087387085', '2', '축구', '부산', '안녕하세요8');
--insert into memb_t(nicknm, email, pwd, name, addr, lat, lon, sex, hobby, hometwn, intro)
--values('test09nickname', 'test09@test.com', '1234', 'test09name', '서울시 강남구 test9구', '37.50472141350399', '127.1066665649414', '2', '농구', '부산', '안녕하세요9');
--insert into memb_t(nicknm, email, pwd, name, addr, lat, lon, sex, hobby, hometwn, intro)
--values('test10nickname', 'test10@test.com', '1234', 'test10name', '서울시 강남구 test10구', '37.499528324991495', '127.03165054321289', '1', '농구', '광주', '안녕하세요10');
--insert into memb_t(nicknm, email, pwd, name, addr, lat, lon, sex, hobby, hometwn, intro)
--values('test11nickname', 'test11@test.com', '1234', 'test11name', '서울시 강남구 test11구', '37.49986879668296', '127.01948404312134', '1', '농구', '광주', '안녕하세요11');
--insert into memb_t(nicknm, email, pwd, name, addr, lat, lon, sex, hobby, hometwn, intro)
--values('test12nickname', 'test12@test.com', '1234', 'test12name', '서울시 강남구 test12구', '37.50062687260705', '127.01413035392761', '2', '축구', '광주', '안녕하세요12');
--insert into memb_t(nicknm, email, pwd, name, addr, lat, lon, sex, hobby, hometwn, intro)
--values('test13nickname', 'test13@test.com', '1234', 'test13name', '서울시 강남구 test13구', '37.497781920204915', '127.02861696481705', '2', '축구', '서울', '안녕하세요13');
--insert into memb_t(nicknm, email, pwd, name, addr, lat, lon, sex, hobby, hometwn, intro)
--values('test14nickname', 'test14@test.com', '1234', 'test14name', '서울시 강남구 test14구', '37.43828735129878', '127.01654434204102', '1', '야구', '서울', '안녕하세요14');
--insert into memb_t(nicknm, email, pwd, name, addr, lat, lon, sex, hobby, hometwn, intro)
--values('test15nickname', 'test15@test.com', '1234', 'test15name', '서울시 강남구 test15구', '37.49764074039292', '127.02837288379669', '1', '야구', '부산', '안녕하세요15');
--
--

-- 채팅
CREATE TABLE `CHAT_T` (
  `chno`   INTEGER NOT NULL COMMENT '채팅글번호', -- 채팅글번호
  `mno`    INTEGER NULL     COMMENT '회원번호', -- 회원번호
  `frdno`  INTEGER NULL     COMMENT '친구번호', -- 친구번호
  `status` INTEGER NULL default 1    COMMENT '상태' -- 상태
)
COMMENT '채팅';

-- 채팅
ALTER TABLE `CHAT_T`
  ADD CONSTRAINT `PK_CHAT_T` -- 채팅 Primary key
    PRIMARY KEY (
      `chno` -- 채팅글번호
    );

ALTER TABLE `CHAT_T`
  MODIFY COLUMN `chno` INTEGER NOT NULL AUTO_INCREMENT COMMENT '채팅글번호';

-- 채팅내용
CREATE TABLE `CHAT_CONTNT` (
  `chcono`  INTEGER    NOT NULL COMMENT '채팅내용번호', -- 채팅내용번호
  `chno`    INTEGER    NULL     COMMENT '채팅글번호', -- 채팅글번호
  `content` MEDIUMTEXT NULL     COMMENT '내용' -- 내용
)
COMMENT '채팅내용';

-- 채팅내용
ALTER TABLE `CHAT_CONTNT`
  ADD CONSTRAINT `PK_CHAT_CONTNT` -- 채팅내용 Primary key
    PRIMARY KEY (
      `chcono` -- 채팅내용번호
    );

ALTER TABLE `CHAT_CONTNT`
  MODIFY COLUMN `chcono` INTEGER NOT NULL AUTO_INCREMENT COMMENT '채팅내용번호';

-- 채팅내용
ALTER TABLE `CHAT_CONTNT`
  ADD CONSTRAINT `FK_CHAT_T_TO_CHAT_CONTNT` -- 채팅 -> 채팅내용
    FOREIGN KEY (
      `chno` -- 채팅글번호
    )
    REFERENCES `CHAT_T` ( -- 채팅
      `chno` -- 채팅글번호
    );


-- 모임에 참여했을 때를 위한 테이
-- 참여친구
DROP TABLE IF EXISTS JOINEDFRD_T RESTRICT;

-- 참여친구
CREATE TABLE JOINEDFRD_T (
  FNO INTEGER NOT NULL COMMENT '글번호', -- 글번호
  MNO INTEGER NOT NULL COMMENT '회원번호' -- 회원번호
)
COMMENT '참여친구';

-- 참여친구
ALTER TABLE JOINEDFRD_T
  ADD CONSTRAINT PK_JOINEDFRD_T -- 참여친구 Primary key
    PRIMARY KEY (
      FNO, -- 글번호
      MNO  -- 회원번호
    );

-- 참여친구
ALTER TABLE JOINEDFRD_T
  ADD CONSTRAINT FK_FEED_T_TO_JOINEDFRD_T -- FEED_T -> 참여친구
    FOREIGN KEY (
      FNO -- 글번호
    )
    REFERENCES FEED_T ( -- FEED_T
      FNO -- 글번호
    );

-- 참여친구
ALTER TABLE JOINEDFRD_T
  ADD CONSTRAINT FK_MEMB_T_TO_JOINEDFRD_T -- MEMB_T -> 참여친구
    FOREIGN KEY (
      MNO -- 회원번호
    )
    REFERENCES MEMB_T ( -- MEMB_T
      MNO -- 회원번호
    );
-- 끝



--
--insert into frd_t (frdno, mno, state, frd_dt) values(1,2,1,now());
--insert into frd_t (frdno, mno, state, frd_dt) values(2,1,1,now());
--insert into frd_t (frdno, mno, state, frd_dt) values(2,3,2,now());
--insert into frd_t (frdno, mno, state, frd_dt) values(2,4,2,now());
--insert into frd_t (frdno, mno, state, frd_dt) values(3,2,2,now());
--insert into frd_t (frdno, mno, state, frd_dt) values(4,2,2,now());

- 친구
DROP TABLE IF EXISTS `FRD_T` RESTRICT;

-- 친구
CREATE TABLE `FRD_T` (
   `FRDNO`  INTEGER  NOT NULL COMMENT '친구번호', -- 친구번호
   `MNO`    INTEGER  NOT NULL COMMENT '회원번호', -- 회원번호
   `STATE`  INTEGER  NOT NULL COMMENT '상태', -- 상태
   `FRD_DT` DATETIME NULL     COMMENT '날짜' -- 날짜
)
COMMENT '친구';

-- 친구
ALTER TABLE `FRD_T`
   ADD CONSTRAINT `PK_FRD_T` -- 친구 기본키
      PRIMARY KEY (
         `FRDNO`, -- 친구번호
         `MNO`    -- 회원번호
      );
);

-- 친구
ALTER TABLE `FRD_T`
   ADD CONSTRAINT `FK_MEMB_T_TO_FRD_T` -- MEMB_T -> 친구
      FOREIGN KEY (
         `MNO` -- 회원번호
      )
      REFERENCES `MEMB_T` ( -- MEMB_T
         `MNO` -- 회원번호
      );

--
--insert into MARKER_T(MNO, MLAT, MLON, MTITLE, MCONTNT, MPHOTO)
--values('1', '37.496708', '127.026865', '카페베네', '여기 프라푸치노 개맛남','/images/markers/cafebene.png');
--insert into MARKER_T(MNO, MLAT, MLON, MTITLE, MCONTNT, MPHOTO)
--values('1', '37.498308', '127.026312', '세탁소', '여기 와이샤스 잘 펴요', '/images/markers/laundary.png');
--insert into MARKER_T(MNO, MLAT, MLON, MTITLE, MCONTNT, MPHOTO)
--values('1', '37.497380', '127.027294', '씨유 편의점', '여기 알바 예쁨', '/images/markers/cu.png');
--insert into MARKER_T(MNO, MLAT, MLON, MTITLE, MCONTNT, MPHOTO)
--values('1', '37.498674', '127.028249', '온누리 약국', '약은 약사에게..', '/images/markers/pharm.png');
--
--
--
--insert into memb_t(nicknm, email, pwd, name, addr, lat, lon)
--values('test01nickname', 'test01@test.com', '1234', 'test01name', '서울시 강남구 test1구', '37.497129', '127.027612');
--insert into memb_t(nicknm, email, pwd, name, addr, lat, lon)
--values('test02nickname', 'test02@test.com', '1234', 'test02name', '서울시 강남구 test2구', '37.496708', '127.026865');
--insert into memb_t(nicknm, email, pwd, name, addr, lat, lon)
--values('test03nickname', 'test03@test.com', '1234', 'test03name', '서울시 강남구 test3구', '37.498308', '127.026312');
--insert into memb_t(nicknm, email, pwd, name, addr, lat, lon)
--values('test04nickname', 'test04@test.com', '1234', 'test04name', '서울시 강남구 test4구', '37.497380', '127.027294');
--insert into memb_t(nicknm, email, pwd, name, addr, lat, lon)
--values('test05nickname', 'test05@test.com', '1234', 'test05name', '서울시 강남구 test5구', '37.498674', '127.028249');
--
--
--insert into feed_t (mno, categry, contnt, cre_dt, title)
--values ('1', '1', 'this is a content test1', '2000/1/1', 'this is a title test1');
--insert into feed_t (mno, categry, contnt, cre_dt, title)
--values ('1', '1', 'this is a content test2', '2000/1/2', 'this is a title test2');
--insert into feed_t (mno, categry, contnt, cre_dt, title)
--values ('2', '1', 'this is a content test3', '2000/1/3', 'this is a title test3');
--insert into feed_t (mno, categry, contnt, cre_dt, title)
--values ('2', '2', 'this is a content test4', '2000/1/4', 'this is a title test4');
--insert into feed_t (mno, categry, contnt, cre_dt, title)
--values ('3', '2', 'this is a content test5', '2000/1/5', 'this is a title test5');
--insert into feed_t (mno, categry, contnt, cre_dt, title)
--values ('3', '2', 'this is a content test6', '2000/1/6', 'this is a title test6');
--insert into feed_t (mno, categry, contnt, cre_dt, title)
--values ('3', '3', 'this is a content test7', '2000/1/7', 'this is a title test7');
--insert into feed_t (mno, categry, contnt, cre_dt, title)
--values ('4', '3', 'this is a content test8', '2000/1/8', 'this is a title test8');



-- MEMB_T
DROP TABLE IF EXISTS MEMB_T RESTRICT;

-- 참여친구
DROP TABLE IF EXISTS TABLE5 RESTRICT;

-- FEED_T
DROP TABLE IF EXISTS FEED_T RESTRICT;

-- 친구
DROP TABLE IF EXISTS TABLE7 RESTRICT;

-- 내지도
DROP TABLE IF EXISTS TABLE8 RESTRICT;

-- 채팅
DROP TABLE IF EXISTS TABLE14 RESTRICT;

-- FEED_PHOTOS
DROP TABLE IF EXISTS FPHOTO_T RESTRICT;

-- HOBBY_T
DROP TABLE IF EXISTS HOBBY_T RESTRICT;

-- MEMB_T
CREATE TABLE MEMB_T (
  MNO     INTEGER      NOT NULL COMMENT '회원번호', -- 회원번호
  NICKNM  VARCHAR(50)  NOT NULL COMMENT '닉네임', -- 닉네임
  EMAIL   VARCHAR(40)  NOT NULL COMMENT '이메일', -- 이메일
  PWD     VARCHAR(50)  NOT NULL COMMENT '비밀번호', -- 비밀번호
  NAME    VARCHAR(50)  NOT NULL COMMENT '이름', -- 이름
  ADDR    VARCHAR(255) NOT NULL COMMENT '주소', -- 주소
  LAT     varchar(100) NOT NULL COMMENT '위도', -- 위도
  LON     varchar(100) NOT NULL COMMENT '경도', -- 경도
  HOMETWN varchar(100) NULL     COMMENT '출신지', -- 출신지
  SEX     INTEGER      NULL     COMMENT '성별', -- 성별
  MPHOTO  VARCHAR(100) NULL     COMMENT '사진경로', -- 사진경로
  CRE_DT  DATETIME     NULL     COMMENT '가입일',
  AGE INT,
  HOBBY VARCHAR(200),
  INTRO VARCHAR(200)
  -- 가입일
)
COMMENT 'MEMB_T';

-- MEMB_T
ALTER TABLE MEMB_T
  ADD CONSTRAINT PK_MEMB_T -- MEMB_T Primary key
    PRIMARY KEY (
      MNO -- 회원번호
    );

-- MEMB_T Unique Index
CREATE UNIQUE INDEX UIX_MEMB_T
  ON MEMB_T ( -- MEMB_T
    EMAIL ASC,  -- 이메일
    NICKNM ASC  -- 닉네임
  );

ALTER TABLE MEMB_T
  MODIFY COLUMN MNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '회원번호';

-- 참여친구
CREATE TABLE TABLE5 (
  FNO INTEGER NOT NULL COMMENT '글번호', -- 글번호
  MNO INTEGER NOT NULL COMMENT '회원번호' -- 회원번호
)
COMMENT '참여친구';

-- 참여친구
ALTER TABLE TABLE5
  ADD CONSTRAINT PK_TABLE5 -- 참여친구 기본키
    PRIMARY KEY (
      FNO, -- 글번호
      MNO  -- 회원번호
    );

-- FEED_T
CREATE TABLE FEED_T (
  FNO         INTEGER     NOT NULL COMMENT '글번호', -- 글번호
  MNO         INTEGER     NOT NULL COMMENT '회원번호', -- 회원번호
  CATEGRY     INTEGER     NOT NULL COMMENT '카테고리', -- 카테고리
  CONTNT      MEDIUMTEXT  NOT NULL COMMENT '글내용', -- 글내용
  CRE_DT      DATETIME    NOT NULL COMMENT '등록일', -- 등록일
  TITLE       VARCHAR(50) NOT NULL COMMENT '글제목', -- 글제목
  MAX_HEADCNT INTEGER     NULL     COMMENT '최대참여인원', -- 최대참여인원
  current_cnt         INTEGER     NULL     COMMENT '갯수', -- 갯수
  MEET_TIME   DATETIME    NULL     COMMENT '약속시간', -- 약속시간
  attachFile1 varchar(255),
  attachFile2 varchar(255),
  attachFile3 varchar(255)
)
COMMENT 'FEED_T';

-- FEED_T
ALTER TABLE FEED_T
  ADD CONSTRAINT PK_FEED_T -- FEED_T Primary key
    PRIMARY KEY (
      FNO -- 글번호
    );

ALTER TABLE FEED_T
  MODIFY COLUMN FNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '글번호';

-- FEED_T
ALTER TABLE FEED_T
  ADD CONSTRAINT FK_MEMB_T_TO_FEED_T -- MEMB_T -> FEED_T
    FOREIGN KEY (
      MNO -- 회원번호
    )
    REFERENCES MEMB_T ( -- MEMB_T
      MNO -- 회원번호
    );
