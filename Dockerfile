# Gunakan mesin PHP 8.2 yang sudah ada Apache-nya
FROM php:8.2-apache

# Install alat pendukung untuk Laravel dan Database
RUN apt-get update && apt-get install -y \
    libzip-dev \
    zip \
    unzip \
    && docker-php-ext-install pdo_mysql zip

# Panggil Composer untuk menginstal paket Laravel
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Atur folder kerja
WORKDIR /var/www/html

# Pindahkan semua file kodemu ke dalam kotak Docker ini
COPY . .

# Install paket Laravel
RUN composer install --no-dev --optimize-autoloader

# Atur arah folder agar menunjuk ke /public
ENV APACHE_DOCUMENT_ROOT /var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

# Aktifkan mod_rewrite (agar fitur link di Laravel berfungsi)
RUN a2enmod rewrite

# Berikan izin ke Laravel untuk menyimpan foto/cache
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache