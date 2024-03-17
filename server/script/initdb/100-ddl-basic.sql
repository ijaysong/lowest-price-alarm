use lowest_price_alarm;

# Product Attachment
CREATE TABLE product_attachment (
    id                  INT           UNSIGNED      NOT NULL    AUTO_INCREMENT,
    url                 VARCHAR(500)                NOT NULL,
    is_active           BOOLEAN                     NOT NULL    DEFAULT false,
    creator_id          INT           UNSIGNED      NOT NULL,
    date_created        DATETIME                    NOT NULL    DEFAULT CURRENT_TIMESTAMP,
    last_updater_id     INT           UNSIGNED      NOT NULL,
    last_updated        DATETIME                    NOT NULL    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

# Product Status
CREATE TABLE product_status (
    id      INT   UNSIGNED  NOT NULL    AUTO_INCREMENT,
    code    VARCHAR(50)     NOT NULL,
    name    VARCHAR(200)    NOT NULL,
    PRIMARY KEY (id)
);

# Company
CREATE TABLE company (
    id          INT            UNSIGNED     NOT NULL    AUTO_INCREMENT,
    name        VARCHAR(200)                NOT NULL,
    is_active   BOOLEAN                     NOT NULL    DEFAULT false,
    PRIMARY KEY (id)
);

# Product
CREATE TABLE product (
    id                      INT           UNSIGNED      NOT NULL    AUTO_INCREMENT,
    company_id              INT           UNSIGNED      NOT NULL,
    product_attachment_id   INT           UNSIGNED      NOT NULL,
    brand_name              VARCHAR(50)                 NOT NULL,
    name                    VARCHAR(100)                NOT NULL,
    url                     VARCHAR(500)                NOT NULL,
    original_price          INT            UNSIGNED     NOT NULL,
    current_price           INT            UNSIGNED     NOT NULL,
    product_status_id       INT            UNSIGNED     NOT NULL,
    is_active               BOOLEAN                     NOT NULL    DEFAULT false,
    is_deleted              BOOLEAN                     NOT NULL    DEFAULT false,
    creator_id              INT            UNSIGNED     NOT NULL,
    date_created            DATETIME                    NOT NULL     DEFAULT CURRENT_TIMESTAMP,
    last_updater_id         INT            UNSIGNED     NOT NULL,
    last_updated            DATETIME                    NOT NULL     DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

CREATE UNIQUE INDEX uix_product_01 ON product (url);

ALTER TABLE product ADD CONSTRAINT FK_product_1 FOREIGN KEY (product_attachment_id) REFERENCES product_attachment (id);

# Product Price History
CREATE TABLE product_price_history (
    id              INT         UNSIGNED    NOT NULL    AUTO_INCREMENT,
    product_id      INT         UNSIGNED    NOT NULL,
    price           INT         UNSIGNED    NOT NULL,
    creator_id      INT         UNSIGNED    NOT NULL,
    date_created    DATETIME                NOT NULL    DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

ALTER TABLE product_price_history ADD CONSTRAINT FK_product_price_history_1 FOREIGN KEY (product_id) REFERENCES product (id);
