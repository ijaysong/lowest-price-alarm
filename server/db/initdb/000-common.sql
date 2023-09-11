# 스키마 생성
CREATE DATABASE lowest_price_alarm;

# 유저 생성
CREATE USER 'admin'@'%' identified BY 'test1234';

# 유저에 스키마 권한 설정
GRANT All PRIVILEGES ON lowest_price_alarm.* TO 'admin'@'%';

flush PRIVILEGES
