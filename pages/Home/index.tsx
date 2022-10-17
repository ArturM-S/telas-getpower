import { useState, useEffect } from 'react';
import { Input } from '../../components/Globals/Input';
import { ProductCard } from '../../components/ProductCard';
import { WelcomeCard } from '../../components/WelcomeCard';
import { CommandsBox, ProductsBox, Sort } from '../../styles/pages/Home/styles';

export default function Home() {
    const [forceRender, setForceRender] = useState(false);
    const [sort, setSort] = useState('');
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState([
        {
            tag: 'curso',
            name: 'Contratos',
            price: 100,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMpwwBmf8Ufg6cY2GI2lg-3TWmt1WX7NLZMg&usqp=CAU',
            description:
                'Utilize nossa plataforma de contratos e otimize sua rotina',
        },
        {
            tag: 'curso',
            name: 'Maquina de vendas',
            price: 300,
            image: 'https://i0.wp.com/blog.econodata.com.br/wp-content/uploads/2022/05/maquina-de-vendas.jpg?fit=2240%2C1260&ssl=1',
            description: 'Transforme em uma maquina de vendas',
        },
        {
            tag: 'curso',
            name: 'GRATUITO | Dimencionamento fotovoltaico',
            price: 200,
            image: 'https://www.lemeconsultoria.com.br/wp-content/uploads/2019/02/gdft001.jpg',
            description:
                'Curso de dimencionamento fotovoltaico para clientes de baixa tensão',
        },
        {
            tag: 'curso',
            name: 'Mestre fotovoltaico 2.0',
            price: 500,
            image: 'image',
            description:
                'Do zero ao especialista. Comece a ter resultados no setor solar em até 45 dias.',
        },
        {
            tag: 'funcionalidade',
            name: 'Plataforma documentos',
            price: 350,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMpwwBmf8Ufg6cY2GI2lg-3TWmt1WX7NLZMg&usqp=CAU',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt luctus, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet lorem. Sed euismod, nunc vel tincidunt luctus, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet lorem.',
        },
        {
            tag: 'funcionalidade',
            name: 'Plataforma proposta',
            price: 250,
            image: 'image',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt luctus, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet lorem. Sed euismod, nunc vel tincidunt luctus, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet lorem.',
            accessLink: '/Proposal',
        },
    ]);

    useEffect(() => {
        if (sort === 'Preço (maior menor)') {
            setProducts(products.sort((a, b) => b.price - a.price));
            setForceRender(!forceRender);
        }
        if (sort === 'Preço (menor maior)') {
            setProducts(products.sort((a, b) => a.price - b.price));
            setForceRender(!forceRender);
        }
    }, [sort]);

    const filteredProducts =
        search.length > 0
            ? products.filter(product =>
                  product.name.toLowerCase().includes(search),
              )
            : [];

    return (
        <>
            <WelcomeCard />
            <CommandsBox>
                <Sort onChange={e => setSort(e.target.value)}>
                    <option disabled selected>
                        Filtrar por
                    </option>
                    <option>Preço (maior menor)</option>
                    <option>Preço (menor maior)</option>
                </Sort>
                <Input
                    type="text"
                    placeholder="pesquisar"
                    style={{ width: '150px' }}
                    onChange={e => setSearch(e.target.value)}
                />
            </CommandsBox>
            <ProductsBox>
                {search.length > 0
                    ? filteredProducts.map(product => (
                          <ProductCard
                              key={product.name}
                              tag={product.tag}
                              name={product.name}
                              price={product.price}
                              image={product.image}
                              description={product.description}
                              accessLink={product.accessLink}
                          />
                      ))
                    : products.map(product => (
                          <ProductCard
                              key={product.name}
                              tag={product.tag}
                              name={product.name}
                              price={product.price}
                              image={product.image}
                              description={product.description}
                              accessLink={product.accessLink}
                          />
                      ))}
            </ProductsBox>
        </>
    );
}
