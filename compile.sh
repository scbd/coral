if [ "${CIRCLE_BRANCH}" == "dev" ]
then
  export base=${DevBaseUrl}
  export api=${DevApiUrl}
elif [ "${CIRCLE_BRANCH}" == "stg" ]
then
  export base=${StgBaseUrl}
  export api=${StgApiUrl}
elif [ "${CIRCLE_BRANCH}" == "master" ]
then
  export base=${baseUrl}
  export api=${apiUrl}
fi

echo "Sucessfull build for environment: ${CIRCLE_BRANCH}"
echo "api: ${apiUrl}"
echo "url: ${baseUrl}"
docker build -t output --build-arg COMMIT=$CIRCLE_SHA1 --build-arg baseUrl=${base} --build-arg apiUrl=${api} .
exit 0
