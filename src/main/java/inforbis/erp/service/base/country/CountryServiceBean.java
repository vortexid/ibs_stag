package inforbis.erp.service.base.country;

import inforbis.erp.model.base.Country;
import inforbis.erp.repository.base.CountryRepository;
import inforbis.erp.service.ErpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;

/**
 * Created by dvirovec on 26.9.2016..
 */
@Service
public class CountryServiceBean extends ErpService implements CountryService {

    @Autowired
    private CountryRepository countryRepository;

    @Autowired
    private HttpSession session;


    @Override
    public Iterable<Country> findAll() {


        Iterable<Country> countrys = countryRepository.findAll(getClientId());

        return countrys;
    }

    @Override
    public Country findOne(Long id) {

        Country country = countryRepository.findOne(id);

        return country;
    }

    @Override
    public Country create(Country country) {

        if(country.getId()!=null) {
            return null;
        }

        country.setClient_id(getClientId());

        Country savedCountry = countryRepository.save(country);

        return savedCountry;

    }

    @Override
    public Country update(Country country) {

        Country countryPersisted = findOne(country.getId());
                if(countryPersisted== null){
                    return null;
                }

        Country updatedCountry = countryRepository.save(country);

        return updatedCountry;
    }

    @Override
    public void delete(Long id) {

        countryRepository.delete(id);

    }
}
