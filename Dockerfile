FROM nginx
COPY ./build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 8888
CMD ["nginx", "-g", "daemon off;"]
