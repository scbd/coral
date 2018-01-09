if [ "${CIRCLE_BRANCH}" == "dev" ]
then
  export baseUrl=${DevBaseUrl}
  export apiUrl=${DevApiUrl}
elif [ "${CIRCLE_BRANCH}" == "stg" ]
then
  export baseUrl=${StgBaseUrl}
  export apiUrl=${StgApiUrl}
elif [ "${CIRCLE_BRANCH}" == "master" ]
then
  export baseUrl=${baseUrl}
  export apiUrl=${apiUrl}
  npm run build
fi

echo "Sucessfull build for environment: ${CIRCLE_BRANCH}"
echo "apiUrl: ${apiUrl}"
echo "baseUrl: ${baseUrl}"
exit 0
